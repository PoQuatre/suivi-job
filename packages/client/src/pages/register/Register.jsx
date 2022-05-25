import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';

const Register = () => {
  const {
    handleSubmit,
    register,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [globalError, setGlobalError] = useState('');
  const { connect } = useUserContext();

  const onSubmit = (data) => {
    setGlobalError('');

    delete data.passwordConfirm;

    fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          navigate('/');
          connect(res.user);
        } else {
          for (const error of res.errors) {
            setError(error.location, { type: 'custom', message: error.cause });
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setGlobalError(
          'Une erreur est survenue lors du traîtement de votre requête',
        );
      });
  };

  return (
    <>
      {globalError && <p>{globalError}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nom d'utilisateur: </label>
          <input
            type="text"
            {...register('username', {
              required: true,
              minLength: 4,
              maxLength: 20,
              pattern: /^[A-Za-z0-9_-]+$/,
            })}
          />
          {errors.username?.type === 'required' && (
            <p>Le nom d'utilisateur est requis.</p>
          )}
          {errors.username?.type === 'minLength' && (
            <p>Le nom d'utilisateur dois faire minimum 4 caractères.</p>
          )}
          {errors.username?.type === 'maxLength' && (
            <p>Le nom d'utilisateur dois faire maximum 20 caractères.</p>
          )}
          {errors.username?.type === 'pattern' && (
            <p>
              Le nom d'utilisateur ne peut uniquement des{' '}
              <code>caractères alphanumérique</code>, <code>_</code> et{' '}
              <code>-</code>.
            </p>
          )}
          {errors.username?.type === 'custom' && (
            <p>{errors.username.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="example@mail.org"
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p>L'adresse email est requise.</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p>L'adresse email doit être valide.</p>
          )}
          {errors.email?.type === 'custom' && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Mot de passe: </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
            })}
          />
          {errors.password?.type === 'required' && (
            <p>Le mot de passe est requis.</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p>Le mot de passe dois faire minimum 8 caractères.</p>
          )}
          {errors.password?.type === 'pattern' && (
            <p>
              Le mot de passe doit contenir au minimum une lettre majuscule, une
              lettre minuscule, et un chiffre.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="passwordConfirm">
            Confirmation du mot de passe:{' '}
          </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            {...register('passwordConfirm', {
              required: true,
              validate: (value) => {
                const password = getValues('password');
                return value === password;
              },
            })}
          />
          {errors.passwordConfirm?.type === 'required' && (
            <p>La confirmation du mot de passe est requise.</p>
          )}
          {errors.passwordConfirm?.type === 'validate' && (
            <p>Les mots de passe ne correspondent pas.</p>
          )}
        </div>

        <input type="submit" value="S'enregistrer" />
      </form>
    </>
  );
};

export default Register;

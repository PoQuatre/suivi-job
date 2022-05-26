import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [globalError, setGlobalError] = useState('');
  const { connect } = useAuth();

  const onSubmit = (data) => {
    setGlobalError('');

    fetch('/auth/login', {
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
          setGlobalError("L'email ou le mot de passe est invalide");
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
        </div>

        <div>
          <label htmlFor="password">Mot de passe: </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <p>Le mot de passe est requis.</p>
          )}
        </div>

        <input type="submit" value="Se connecter" />
      </form>
    </>
  );
};

export default Login;

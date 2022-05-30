import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './register.module.css';

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
  const { connect } = useAuth();

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
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Inscription</h1>

        {globalError && <p className={styles.globalError}>{globalError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label htmlFor="username" className={styles.input}>
              <input
                type="text"
                placeholder="username"
                id="username"
                required
                {...register('username', {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                  pattern: /^[A-Za-z0-9_-]+$/,
                })}
              />
              <span>Nom d'utilisateur</span>
            </label>

            {errors.username?.type === 'required' && (
              <p className={styles.error}>Le nom d'utilisateur est requis.</p>
            )}
            {errors.username?.type === 'minLength' && (
              <p className={styles.error}>
                Le nom d'utilisateur dois faire minimum 4 caractères.
              </p>
            )}
            {errors.username?.type === 'maxLength' && (
              <p className={styles.error}>
                Le nom d'utilisateur dois faire maximum 20 caractères.
              </p>
            )}
            {errors.username?.type === 'pattern' && (
              <p className={styles.error}>
                Le nom d'utilisateur ne peut uniquement des{' '}
                <code>caractères alphanumérique</code>, <code>_</code> et{' '}
                <code>-</code>.
              </p>
            )}
            {errors.username?.type === 'custom' && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={styles.input}>
              <input
                type="email"
                placeholder="example@mail.org"
                id="email"
                required
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                })}
              />
              <span>Email</span>
            </label>

            {errors.email?.type === 'required' && (
              <p className={styles.error}>L'adresse email est requise.</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p className={styles.error}>L'adresse email doit être valide.</p>
            )}
            {errors.email?.type === 'custom' && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className={styles.input}>
              <input
                type="password"
                placeholder="Votre mot de passe"
                id="password"
                required
                {...register('password', {
                  required: true,
                  minLength: 8,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
                })}
              />
              <span>Mot de passe</span>
            </label>

            {errors.password?.type === 'required' && (
              <p className={styles.error}>Le mot de passe est requis.</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className={styles.error}>
                Le mot de passe dois faire minimum 8 caractères.
              </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className={styles.error}>
                Le mot de passe doit contenir au minimum une lettre majuscule,
                une lettre minuscule, et un chiffre.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="passwordConfirm" className={styles.input}>
              <input
                type="password"
                placeholder="Votre mot de passe"
                id="passwordConfirm"
                required
                {...register('passwordConfirm', {
                  required: true,
                  validate: (value) => {
                    const password = getValues('password');
                    return value === password;
                  },
                })}
              />
              <span>Confirmation du mot de passe</span>
            </label>

            {errors.passwordConfirm?.type === 'required' && (
              <p className={styles.error}>
                La confirmation du mot de passe est requise.
              </p>
            )}
            {errors.passwordConfirm?.type === 'validate' && (
              <p className={styles.error}>
                Les mots de passe ne correspondent pas.
              </p>
            )}
          </div>

          <input className={styles.button} type="submit" value="S'inscrire" />
          <Link className={styles.link} to="/login">
            Déjà un compte ?<br />
            Cliquez ici pour vous connecter
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;

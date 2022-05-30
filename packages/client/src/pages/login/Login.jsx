import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './login.module.css';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Connexion</h1>

        {globalError && <p className={styles.globalError}>{globalError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          </div>

          <div>
            <label htmlFor="password" className={styles.input}>
              <input
                type="password"
                placeholder="Votre mot de passe"
                id="password"
                required
                {...register('password', { required: true })}
              />
              <span>Mot de passe</span>
            </label>

            {errors.password?.type === 'required' && (
              <p className={styles.error}>Le mot de passe est requis.</p>
            )}
          </div>

          <input className={styles.button} type="submit" value="Se connecter" />
          <Link className={styles.link} to="/register">
            Pas encore de compte ?<br />
            Cliquez ici pour en créer un
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

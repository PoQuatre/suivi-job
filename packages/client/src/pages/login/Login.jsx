import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
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
        } else {
          setError('login', {
            type: 'custom',
            message: "L'email ou le mot de passe est invalide",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setError('login', {
          type: 'custom',
          message:
            'Une erreur est survenue lors du traîtement de votre requête',
        });
      });
  };

  return (
    <>
      {errors.login && <p>{errors.login.message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="example@mail.org"
            {...register('email', { required: true })}
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe: </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            {...register('password', { required: true })}
          />
        </div>

        <input type="submit" value="Se connecter" />
      </form>
    </>
  );
};

export default Login;

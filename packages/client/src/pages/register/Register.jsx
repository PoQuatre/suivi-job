import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    handleSubmit,
    register,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
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
        } else {
          for (const error of res.errors) {
            setError(error.location, { type: 'custom', message: error.cause });
          }
        }
      })
      .catch((err) => {
        console.error(err);
        setError('register', {
          type: 'custom',
          message:
            'Une erreur est survenue lors du traîtement de votre requête',
        });
      });
  };

  return (
    <>
      {errors.register && <p>{errors.register.message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Nom d'utilisateur: </label>
          <input
            type="text"
            placeholder="example@mail.org"
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'custom' && (
            <p>{errors.username.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="example@mail.org"
            {...register('email', { required: true })}
          />
          {errors.email?.type === 'custom' && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Mot de passe: </label>
          <input
            type="password"
            placeholder="Votre mot de passe"
            {...register('password', { required: true })}
          />
        </div>

        <div>
          <label htmlFor="passwordConfirm">Mot de passe: </label>
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
        </div>

        <input type="submit" value="S'enregistrer" />
      </form>
    </>
  );
};

export default Register;

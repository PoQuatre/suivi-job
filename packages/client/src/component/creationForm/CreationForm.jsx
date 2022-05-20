import { useForm } from 'react-hook-form';
import styles from './CreationForm.module.css';

function Formulaire() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = 'http://localhost:8080/api/job-application/';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(data),
    })
      .then((reponse) => reponse.json())
      .then((json) => {
        console.log(json);
        alert('Ca passe');
      });
  };

  return (
    <div>
      <h1>Validation de mes information</h1>
      <div className={styles.formGroup}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="start">Date du debut</label>
          <input
            type="date"
            className={styles.formField}
            id="start"
            name="trip-start"
            min="2022-05-17"
            max="20230-12-31"
            {...register('date', {
              required: true,
            })}
          ></input>
          <div>
            <label for="start">Entreprise</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="Nom de l'entreprise"
              {...register('company', {
                required: true,
              })}
            ></input>
            {errors.company && (
              <span className={styles.span}>Manque le nom de l'entreprise</span>
            )}
          </div>

          <div>
            <label for="start">Description</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="Description de l'entreprise"
              {...register('description', {
                required: true,
                maxLength: 2000,
              })}
            ></input>
            {errors.description?.type === 'maxLength' && (
              <span className={styles.span}>
                {' '}
                la description dois faire maximum 2000 caractères
              </span>
            )}
          </div>

          <div>
            <label for="start"> Type de Job</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="CDI ? CDD ? Stage ?"
              {...register('typeJob', {
                required: true,
              })}
            ></input>
            {errors.typeJob && (
              <span className={styles.span}>Manque le type de jobs </span>
            )}
          </div>

          <div>
            <label for="start">Titre du job</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="Titre du job"
              {...register('titleJob', {
                required: true,
              })}
            ></input>
            {errors.titleJob && (
              <span className={styles.span}>Manque le nom du jobs </span>
            )}
          </div>

          <div>
            <label for="url">Lien de l'offre</label>
            <input
              type="url"
              className={styles.formField}
              name="url"
              id="url"
              placeholder="https://example.com"
              {...register('linkOffer', {
                required: true,
                pattern: 'https://.*',
              })}
            ></input>
            {errors.linkOffer && <span className={styles.span}></span>}
          </div>

          <div>
            <label for="start">Adresse</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="Adresse de l'entreprise"
              {...register('adress', {
                required: true,
              })}
            ></input>
            {errors.adress && (
              <span className={styles.span}>manque l'adresse</span>
            )}
          </div>

          <div>
            <label for="start">Contact</label>
            <input
              type="text"
              className={styles.formField}
              placeholder="Contact"
              {...register('contact', {
                required: true,
              })}
            ></input>
            {errors.contact && (
              <span className={styles.span}>Manque le contact</span>
            )}
          </div>

          <div className={styles.formBtn}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulaire;

import { useForm } from 'react-hook-form';
import styles from './CreationForm.module.css';

function CreationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = 'http://localhost:8080/api/job-application/';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
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
          <div className={styles.inputDataBase}>
            <div className={styles.inputLeft}>
              <input
                type="date"
                className={styles.inputData}
                {...register('date', {
                  required: true,
                })}
              />
              {errors.date?.type === 'required' && (
                <span className={styles.span}>
                  La date de candidature est requise
                </span>
              )}
            </div>

            <div className={styles.inputRight}>
              <select className={styles.inputData} {...register('state')}>
                <option value="waiting">En Attente</option>
                <option value="no-response">Sans Réponse</option>
                <option value="denied">Refusé</option>
                <option value="accepted">Accepté</option>
              </select>
            </div>
          </div>

          <div>
            <input
              type="text"
              className={styles.formField}
              placeholder="Nom de l'entreprise *"
              {...register('company', {
                required: true,
              })}
            />
            {errors.company?.type === 'required' && (
              <span className={styles.span}>
                Le nom de l'entreprise est requis
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              className={styles.formField}
              placeholder="CDI ? CDD ? Stage ?"
              {...register('typeJob')}
            />
          </div>

          <div>
            <input
              type="text"
              className={styles.formField}
              placeholder="Titre du job *"
              {...register('titleJob', {
                required: true,
              })}
            />
            {errors.titleJob?.type === 'required' && (
              <span className={styles.span}>Manque le nom du poste</span>
            )}
          </div>

          <div>
            <input
              type="url"
              className={styles.formField}
              name="url"
              id="url"
              placeholder="https://example.com"
              {...register('linkOffer', {
                pattern: /^https?:\/\/.+$/,
              })}
            />
            {errors.linkOffer?.type === 'pattern' && (
              <span className={styles.span}>
                Veuillez entrer un lien valide
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              className={styles.formField}
              placeholder="Adresse de l'entreprise"
              {...register('adress')}
            />
          </div>

          <div>
            <input
              type="text"
              className={styles.formField}
              placeholder="Contact"
              {...register('contact')}
            />
          </div>

          <div>
            <textarea
              className={styles.inputDescription}
              placeholder="Description de l'entreprise"
              {...register('description', {
                maxLength: 2000,
              })}
            />
            {errors.description?.type === 'maxLength' && (
              <span className={styles.span}>
                La description dois faire maximum 2000 caractères
              </span>
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

export default CreationForm;

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './JobApplicationForm.module.css';

const STEP_KEY_REGEX = /^(.+?)-([0-9]+)$/;

function CreationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [steps, setSteps] = useState([]);

  const onSubmit = (data) => {
    const finalData = {
      adress: data.adress || undefined,
      company: data.company || undefined,
      contact: data.contact || undefined,
      date: data.date || undefined,
      description: data.description || undefined,
      linkOffer: data.linkOffer || undefined,
      state: data.state || undefined,
      titleJob: data.titleJob || undefined,
      typeJob: data.typeJob || undefined,
    };

    finalData.steps = Object.keys(data)
      .filter((key) => STEP_KEY_REGEX.test(key))
      .reduce((arr, key, i) => {
        const result = STEP_KEY_REGEX.exec(key);
        const index = parseInt(result[2]);

        if (arr[index] === undefined) arr[index] = {};
        if (result[1] !== 'locationType' && result[1] !== 'details') {
          arr[index][result[1]] = data[key] || undefined;
        } else {
          if (arr[index].location === undefined) arr[index].location = {};
          arr[index].location[result[1]] = data[key] || undefined;
        }

        return arr;
      }, []);

    fetch('/api/job-application', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(finalData),
    })
      .then((reponse) => reponse.json())
      .then((json) => {
        if (!json.errors) {
          console.log(json);
        } else {
          console.error(json);
        }
      });
  };

  return (
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
            <span className={styles.span}>Veuillez entrer un lien valide</span>
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

        {steps.map((element, i) => {
          return (
            <>
              <select {...register(`stepType-${i}`, { required: true })}>
                <option value="interview">Entretien</option>
                <option value="test">Test technique</option>
                <option value="trial">Essai</option>
              </select>
              <input
                type="date"
                {...register(`startDate-${i}`, { required: true })}
              />
              <input type="date" {...register(`endDate-${i}`)} />
              <select {...register(`locationType-${i}`)}>
                <option value="video">Visio</option>
                <option value="phone">Telephone</option>
                <option value="in-person">Présentiel</option>
              </select>
              <input
                type="text"
                placeholder="Details"
                {...register(`details-${i}`)}
              />
            </>
          );
        })}

        <button onClick={() => setSteps((steps) => [...steps, {}])}>
          Ajouter une étape
        </button>

        <div className={styles.formBtn}>
          <input type="submit" value="Ajouter" />
          <button>Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default CreationForm;

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './JobApplicationForm.module.css';
import moment from 'moment';
import CloseIcon from '../icons/CloseIcon';

const STEP_KEY_REGEX = /^(.+?)-([0-9]+)$/;

function CreationForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();

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

    let url = '/api/job-application';
    if (!props.isNew) url += '/' + id;

    fetch(url, {
      method: props.isNew ? 'POST' : 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(finalData),
    })
      .then((reponse) => reponse.json())
      .then((json) => {
        if (!json.errors) {
          props.onUpdate && props.onUpdate();
          if (props.isNew) {
            navigate('/' + json._id);
          }
        } else {
          console.error(json);
        }
      });
  };

  const getDateNow = () => {
    return moment().format('YYYY-MM-DD');
  };

  const getDate = (date) => {
    return date && moment(date).format('YYYY-MM-DD');
  };

  const handleReset = () => {
    if (!props.isNew) {
      setSteps([]);
      reset();

      fetch(`/api/job-application/${id}`)
        .then((reponse) => reponse.json())
        .then((json) => {
          if (!json.errors) {
            setSteps(json.steps);

            for (const key in json) {
              if (key === 'date') {
                setValue('date', getDate(json[key]));
              } else if (key === 'steps') {
                for (let i = 0; i < json[key].length; i++) {
                  const step = json[key][i];

                  setValue(`stepType-${i}`, step.stepType);
                  setValue(`startDate-${i}`, getDate(step.startDate));
                  setValue(`endDate-${i}`, getDate(step.endDate));

                  if (step.location) {
                    setValue(`locationType-${i}`, step.location.locationType);
                    setValue(`details-${i}`, step.location.details);
                  }
                }
              } else {
                setValue(key, json[key]);
              }
            }
          } else {
            console.error(json);
          }
        });
    } else {
      setSteps([]);
      reset();
      setValue('date', getDateNow());
    }
  };

  useEffect(handleReset, [id, props.isNew]);

  return (
    <div className={styles.container}>
      <button className={styles.closeBtn} onClick={() => navigate('/')}>
        <CloseIcon />
      </button>

      {props.isNew && <h2 className={styles.title}>Ajout de candidature</h2>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label htmlFor="date" className={styles.input}>
              <input
                type="date"
                id="date"
                required
                className={styles.inputData}
                {...register('date', {
                  required: true,
                })}
              />
              <span>Date de candidature</span>
            </label>
            {errors.date?.type === 'required' && (
              <span className={styles.error}>
                La date de candidature est requise
              </span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="state" className={styles.input}>
              <select
                className={styles.inputData}
                id="state"
                {...register('state')}
              >
                <option value="waiting">En Attente</option>
                <option value="no-response">Sans Réponse</option>
                <option value="denied">Refusé</option>
                <option value="accepted">Accepté</option>
              </select>
              <span>État de la candidature</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="company" className={styles.input}>
            <input
              type="text"
              placeholder="example@mail.org"
              id="company"
              required
              {...register('company', {
                required: true,
              })}
            />
            <span>Nom de l'entreprise</span>
          </label>

          {errors.company?.type === 'required' && (
            <span className={styles.error}>
              Le nom de l'entreprise est requis
            </span>
          )}
        </div>

        <div>
          <label htmlFor="titleJob" className={styles.input}>
            <input
              type="text"
              placeholder="example@mail.org"
              id="titleJob"
              required
              {...register('titleJob', {
                required: true,
              })}
            />
            <span>Titre de l'offre</span>
          </label>

          {errors.titleJob?.type === 'required' && (
            <span className={styles.error}>Manque le nom du poste</span>
          )}
        </div>

        <div>
          <label htmlFor="typeJob" className={styles.input}>
            <input
              type="text"
              placeholder="example@mail.org"
              id="typeJob"
              {...register('typeJob')}
            />
            <span>CDI ? CDD ? Stage ?</span>
          </label>
        </div>

        <div>
          <label htmlFor="linkOffer" className={styles.input}>
            <input
              type="url"
              placeholder="https://example.com"
              id="linkOffer"
              {...register('linkOffer', {
                pattern: /^https?:\/\/.+$/,
              })}
            />
            <span>Lien de l'offre</span>
          </label>

          {errors.linkOffer?.type === 'pattern' && (
            <span className={styles.error}>Veuillez entrer un lien valide</span>
          )}
        </div>

        <div>
          <label htmlFor="adress" className={styles.input}>
            <input
              type="text"
              placeholder="address"
              id="adress"
              {...register('adress')}
            />
            <span>Adresse de l'entreprise</span>
          </label>
        </div>

        <div>
          <label htmlFor="contact" className={styles.input}>
            <input
              type="url"
              placeholder="https://example.com"
              id="contact"
              {...register('contact')}
            />
            <span>Contact</span>
          </label>
        </div>

        <div>
          <label htmlFor="description" className={styles.input}>
            <textarea
              type="text"
              placeholder="description"
              id="description"
              {...register('description', {
                maxLength: 2000,
              })}
            />
            <span>Description</span>
          </label>

          {errors.description?.type === 'maxLength' && (
            <span className={styles.error}>
              La description dois faire maximum 2000 caractères
            </span>
          )}
        </div>

        {/* {steps.map((element, i) => {
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

        {props.isNew || (
          <button onClick={() => setSteps((steps) => [...steps, {}])}>
            Ajouter une étape
          </button>
        )} */}

        {props.isNew ? (
          <input type="submit" value="Ajouter" className={styles.button} />
        ) : (
          <div className={`${styles.row} ${styles.rowBtn}`}>
            <input
              type="submit"
              value="Sauvegarder"
              className={styles.button}
            />
            <button
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                handleReset();
              }}
            >
              Annuler
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreationForm;

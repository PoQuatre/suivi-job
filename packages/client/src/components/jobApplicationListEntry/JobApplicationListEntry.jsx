import React from 'react';
import styles from './jobApplicationListEntry.module.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import GlobeIcon from '../icons/GlobeIcon';

function jobApplicationListEntry(props) {
  const navigate = useNavigate();
  const getColorClass = () => {
    if (props.state === 'waiting') {
      return styles.waiting;
    } else if (props.state === 'denied') {
      return styles.denied;
    } else if (props.state === 'no-response') {
      return styles.noResponse;
    } else if (props.state === 'accepted') {
      return styles.accepted;
    } else {
      return styles.jobList;
    }
  };

  const getDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  return (
    <div
      className={getColorClass()}
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(`/${props.id}`)}
    >
      <div className={styles.ItemList}>
        <div className={styles.textContainer}>
          <p className={styles.entreprise}>{props.enterprise}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.titleJob}>{props.titleJob}</p>
        </div>
        <div className={styles.icons}>
          {props.url ? (
            <a href={props.url} target="_blank">
              <GlobeIcon />
            </a>
          ) : null}
        </div>
        <div>
          <p className={styles.date}>{getDate(props.date)}</p>
        </div>
      </div>
    </div>
  );
}

export default jobApplicationListEntry;

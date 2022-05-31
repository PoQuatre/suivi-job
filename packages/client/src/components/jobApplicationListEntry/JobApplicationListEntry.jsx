import React from 'react';
import styles from './jobApplicationListEntry.module.css';
import moment from 'moment';
import { Route, Link, Router } from 'react-router-dom';
import GlobeIcon from '../icons/GlobeIcon';

function jobApplicationListEntry(props) {
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
    <Link to={`/${props.id}`} key={props.id}>
      <div className={getColorClass()}>
        <div className={styles.ItemList}>
          <div>
            <p className={styles.enterprise}>{props.enterprise}</p>
          </div>
          <div>
            <p className={styles.titleJob}>{props.titleJob}</p>
          </div>
          <div className={styles.icons}>
            {props.url ? (
              <a href={props.url} target="_blank">
                {' '}
                <GlobeIcon />
              </a>
            ) : null}
          </div>
          <div>
            <p className={styles.date}>{getDate(props.date)}</p>
          </div>
          {/* <d>
          <button onClick={props.onDelete}>delete</button>
        </td> */}
        </div>
      </div>
    </Link>
  );
}

export default jobApplicationListEntry;

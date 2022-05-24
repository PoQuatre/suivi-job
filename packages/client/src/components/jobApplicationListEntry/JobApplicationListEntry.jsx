import React from 'react';
import styles from './jobApplicationListEntry.module.css';
import moment from 'moment';

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
    <>
      <tr key={props.id} className={getColorClass()}>
        <td className={styles.enterprise}>{props.enterprise}</td>
        <td className={styles.titleJob}>{props.titleJob}</td>
        <td className={styles.date}>{getDate(props.date)}</td>
        <td>
          <button onClick={props.onDelete}>delete</button>
        </td>
      </tr>
      <di></di>
    </>
  );
}

export default jobApplicationListEntry;

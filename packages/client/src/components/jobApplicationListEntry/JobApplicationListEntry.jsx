import React from 'react';
import styles from './jobApplicationListEntry.module.css';
import moment from 'moment';

function jobApplicationListEntry(props) {
  const getColorClass = () => {
    // switch (props.state) {
    //   case 'waiting':
    //      styles.waiting;
    //      break;
    //   case 'accepted':
    //      styles.accepted;
    //      break;
    //   case 'no-response':
    //      styles.no-response;
    //     break;
    //   case 'denied':
    //      styles.denied;
    //      break;
    //   default :
    //      styles.jobList;
    //      break;
    //     }
    if (props.state === 'waiting') {
      return styles.waiting;
    } else if (props.state === 'denied') {
      return styles.denied;
    } else if (props.state === 'noResponse') {
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

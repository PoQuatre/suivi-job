import React from 'react';
import styles from './landingPageCard.module.css';

function LandingPageCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.image} />

      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default LandingPageCard;

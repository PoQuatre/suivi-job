import React from 'react';
import LandingPageIcons from '../landingPageIcons/LandingPageIcons';
import styles from './landingPageCard.module.css';

function LandingPageCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.image} />

      <div>
        <h3 className={styles.title}>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <LandingPageIcons
          linkedin={props.linkedin}
          git={props.git}
          website={props.website}
        />
      </div>
    </div>
  );
}

export default LandingPageCard;

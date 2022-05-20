import React from 'react';
import styles from './landingPageFeature.module.css';

function LandingPageFeature(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.title} />

      <div className={styles.description}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.paragraph}>{props.description}</p>
      </div>
    </div>
  );
}

export default LandingPageFeature;

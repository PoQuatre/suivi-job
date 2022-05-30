import React from 'react';
import styles from './emptyCard.module.css';

function EmptyCard(props) {
  return (
    <div className={styles.emptyForm}>
      <p>Désolé je n'ai rien à afficher </p>
    </div>
  );
}

export default EmptyCard;

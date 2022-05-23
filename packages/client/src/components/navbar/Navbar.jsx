import React, { useState } from 'react';
import { HomeIcon } from '../icons/HomeIcon';
import { DashboardIcon } from '../icons/DashboardIcon';
import { ParamsIcon } from '../icons/ParamsIcon';
import { NavButtonIcon } from '../icons/NavButtonIcon';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.navButton}>
        <h2 className={`${!isOpen ? styles.none : ''}`}>SUIVI JOB</h2>
        <button
          className={styles.button}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <NavButtonIcon
            className={`${styles.navButtonIcon} ${
              isOpen ? styles.inversed : ''
            }`}
          />
        </button>
      </div>
      <div className={styles.section}>
        <a href="/homepage">
          <HomeIcon className={styles.icon} />
          <p>Page d'acceuil</p>
        </a>
      </div>
      <div className={styles.section}>
        <a href="/dashboard">
          <DashboardIcon className={styles.icon} />
          <p>Tableau de bort</p>
        </a>
      </div>
      <div className={`${styles.section} ${styles.params}`}>
        <a href="/params">
          <ParamsIcon className={styles.icon} />
          <p>Paramètre</p>
        </a>
      </div>
    </div>
  );
};

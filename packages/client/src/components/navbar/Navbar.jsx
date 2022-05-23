import React, { useState } from 'react';
import { HomeIcon } from '../icons/HomeIcon';
import { DashboardIcon } from '../icons/DashboardIcon';
import { ParamsIcon } from '../icons/ParamsIcon';
import { NavButtonIcon } from '../icons/NavButtonIcon';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [navBolean, setNavBolean] = useState(false);
  //     let location = useLocation();
  //   React.useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);

  return (
    <div
      className={`${styles.navbar} ${navBolean === true ? styles.open : ''}`}
    >
      <div className={styles.navButton}>
        <h2 className={`${navBolean === false ? styles.none : ''}`}>
          SUIVI JOB
        </h2>
        <button
          className={styles.button}
          onClick={() => {
            setNavBolean(!navBolean);
          }}
        >
          <NavButtonIcon
            className={`${styles.navButtonIcon} ${
              navBolean === true ? styles.inversed : ''
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

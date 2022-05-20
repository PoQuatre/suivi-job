import React, { useState } from 'react';
import { HomeIcon } from '../icons/HomeIcon';
import { DashboardIcon } from '../icons/DashboardIcon';
import { ParamsIcon } from '../icons/ParamsIcon';
import { NavButtonIcon } from '../icons/NavButtonIcon';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [navBolean, setBolean] = useState(false);
  //     let location = useLocation();
  //   React.useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navButton}>
        <button
          className={styles.button}
          onClick={() => {
            setBolean(!navBolean);
          }}
        >
          <NavButtonIcon className={styles.navButtonIcon} />
        </button>
      </div>
      <div className={styles.section}>
        <a>
          <HomeIcon className={styles.icon} />
        </a>
      </div>
      <div className={styles.section}>
        <a>
          <DashboardIcon className={styles.icon} />
        </a>
      </div>
      <div className={`${styles.section} ${styles.params}`}>
        <a>
          <ParamsIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

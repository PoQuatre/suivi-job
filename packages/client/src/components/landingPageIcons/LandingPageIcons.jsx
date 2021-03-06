import GithubIcon from '../icons/GithubIcon';
import GlobeIcon from '../icons/GlobeIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import styles from './landingPageIcons.module.css';

function LandingPageIcons(props) {
  return (
    <div className={styles.position}>
      <a href={props.linkedin} className={styles.icon}>
        <LinkedinIcon />
      </a>
      <a href={props.git} className={styles.icon}>
        <GithubIcon />
      </a>
      <a href={props.website} className={styles.globe}>
        <GlobeIcon />
      </a>
    </div>
  );
}

export default LandingPageIcons;

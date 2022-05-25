import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import GlobeIcon from '../icons/GlobeIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import styles from './landingPageIcons.module.css';

function LandingPageIcons(props) {
  return (
    <div>
      <a href={props.linkedin}>
        {' '}
        <LinkedinIcon />
      </a>
      <a href={props.git}>
        {' '}
        <GithubIcon />
      </a>
      <a href={props.website}>
        <GlobeIcon />
      </a>
    </div>
  );
}

export default LandingPageIcons;

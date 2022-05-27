import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlusIcon from '../icons/PlusIcon';
import styles from './JobApplicationAddList.module.css';

function JobApplicationAddList(props) {
  return (
    <Link to="/new" className={`${props.className} ${styles.container}`}>
      <PlusIcon />
    </Link>
  );
}

export default JobApplicationAddList;

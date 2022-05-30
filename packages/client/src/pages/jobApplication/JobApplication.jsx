import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import JobApplicationList from '../../components/jobApplicationList/JobApplicationList';
import JobApplicationForm from '../../components/jobApplicationForm/JobApplicationForm';
import styles from './jobApplication.module.css';
import JobApplicationAddList from '../../components/JobApplicationAddList/JobApplicationAddList';
import EmptyCard from '../../components/emptyCard/EmptyCard';

function JobApplication() {
  const [data, setData] = useState([]);

  const handleUpdate = () => {
    fetch('/api/job-application')
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(handleUpdate, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <JobApplicationList list={data} />
        <JobApplicationAddList className={styles.addButton} />
      </div>
      <div className={styles.rightContainer}>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.desktopOnly}>
                <EmptyCard />
              </div>
            }
          />
          <Route
            path="/new"
            element={
              <div className={styles.popup}>
                <JobApplicationForm isNew onUpdate={handleUpdate} />
              </div>
            }
          />
          <Route
            path="/:id"
            element={
              <div className={styles.popup}>
                <JobApplicationForm onUpdate={handleUpdate} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default JobApplication;

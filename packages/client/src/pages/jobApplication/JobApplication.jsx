import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import JobApplicationList from '../../components/jobApplicationList/JobApplicationList';
import JobApplicationForm from '../../components/jobApplicationForm/JobApplicationForm';
import { Navbar } from '../../components/navbar/Navbar';
import styles from './jobApplication.module.css';
import JobApplicationAddList from '../../components/JobApplicationAddList/JobApplicationAddList';

function JobApplication() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/job-application')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
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
                <h1>Nothing to show</h1>
              </div>
            }
          />
          <Route
            path="/new"
            element={
              <div className={styles.popup}>
                <JobApplicationForm isNew />
              </div>
            }
          />
          <Route
            path="/:id"
            element={
              <div className={styles.popup}>
                <JobApplicationForm />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default JobApplication;

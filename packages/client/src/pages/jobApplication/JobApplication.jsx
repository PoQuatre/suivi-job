import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import JobApplicationList from '../../components/jobApplicationList/JobApplicationList';
import JobApplicationForm from '../../components/jobApplicationForm/JobApplicationForm';
import { Navbar } from '../../components/navbar/Navbar';
import styles from './jobApplication.module.css';

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
      <Navbar />
      <div className={styles.splitContainer}>
        <JobApplicationList list={data} />
      </div>
      <div className={styles.splitContainer}>
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

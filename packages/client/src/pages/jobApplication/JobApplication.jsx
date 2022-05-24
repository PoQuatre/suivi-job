import React, { useEffect, useState } from 'react';
import JobApplicationList from '../../components/jobApplicationList/JobApplicationList';

function JobApplication() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/job-application')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <JobApplicationList list={data} />
    </div>
  );
}

export default JobApplication;

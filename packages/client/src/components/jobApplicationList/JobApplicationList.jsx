import React, { useState } from 'react';
import styles from './jobApplicationList.module.css';
import JobApplicationListEntry from '../jobApplicationListEntry/JobApplicationListEntry';

function JobApplicationList(props) {
  const deleteTodo = (id) => {
    setLists((lists) => lists.filter((item) => item.id !== id));
  };

  return (
    <div className="list">
      <table>
        <thead>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </thead>
        <tbody>
          {props.list.map((item) => {
            return (
              <>
                <JobApplicationListEntry
                  id={item.id}
                  state={item.state}
                  enterprise={item.company}
                  titleJob={item.titleJob}
                  date={item.date}
                  onDelete={() => deleteTodo(item.id)}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JobApplicationList;

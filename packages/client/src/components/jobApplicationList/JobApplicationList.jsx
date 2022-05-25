import React, { useState } from 'react';
import styles from './jobApplicationList.module.css';
import JobApplicationListEntry from '../jobApplicationListEntry/JobApplicationListEntry';

function JobApplicationList(props) {
  const deleteTodo = (id) => {
    setLists((lists) => lists.filter((item) => item.id !== id));
  };

  return (
    <div>
      {props.list.map((item) => {
        return (
          <JobApplicationListEntry
            id={item.id}
            state={item.state}
            enterprise={item.company}
            titleJob={item.titleJob}
            date={item.date}
            className={styles.itemList}
            onDelete={() => deleteTodo(item.id)}
          />
        );
      })}
    </div>
  );
}

export default JobApplicationList;

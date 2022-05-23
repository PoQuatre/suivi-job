import React, { useState } from 'react';
import styles from './jobApplicationList.module.css';
import JobApplicationListEntry from '../jobApplicationListEntry/JobApplicationListEntry';

function JobApplicationList(props) {
  // const [lists, setLists] = useState([
  //   {
  //     id: '628784ffa75e69653cee7b0b',
  //     enterprise: 'Lorem ipsum dolor sit amet.',
  //     titleJob:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt, expedita quos assumenda quia ipsum.',
  //     date: '20/05/2022',
  //     state: 'waiting',
  //   },
  //   {
  //     id: '628785596b7f8c77aafeac35',
  //     enterprise: 'Dolor sit amet.',
  //     titleJob: 'Lorem ipsum dolor sit amet consectetur assumenda quia ipsum.',
  //     date: '01/05/2022',
  //     state: 'denied',
  //   },
  //   {
  //     id: '62878560a0a27ca48618eded',
  //     enterprise: 'Lorem ipsum dolor.',
  //     titleJob: 'Lorem quos assumenda quia ipsum.',
  //     date: '21/05/2022',
  //     state: 'accepted',
  //   },
  //   {
  //     id: '62878567383cf66f086208f3',
  //     enterprise: 'Lorem ipsum.',
  //     titleJob: 'Lorem sunt, expedita quos assumenda quia ipsum.',
  //     date: '17/05/2022',
  //     state: 'no-response',
  //   },

  // ]);

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

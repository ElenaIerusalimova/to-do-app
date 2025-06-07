import React from 'react';
import { BsCheck } from 'react-icons/bs';
import styles from './Check.module.css';
import classNames from 'classnames';

const Check = ({ isCompleted }) => {
  return (
    <div
      className={classNames(
        styles.checkbox, 
        { [styles.completed]: isCompleted } 
      )}
    >
      {isCompleted && (
        <BsCheck
          size={24} 
          className={styles.checkIcon} 
        />
      )}
    </div>
  );
};

export default Check;
import React, { useState } from 'react';
import styles from './CreateTodoField.module.css'

const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className={styles.createTodoField}>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={handleKeyDown}
        placeholder="Add new todo"
        className={styles.todoInput} 
      />
    </div>
  );
};

export default CreateTodoField;
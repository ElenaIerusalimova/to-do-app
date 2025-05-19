import React, { useState } from 'react';

const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={handleKeyDown} 
        placeholder="Add new todo"
        className="bg-transparent border-none outline-none text-white w-full"
      />
    </div>
  );
};

export default CreateTodoField;
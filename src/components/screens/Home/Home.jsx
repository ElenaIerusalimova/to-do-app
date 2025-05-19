import React, { useState } from "react";
import Todoitem from "./item/Todoitem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        _id: 'kdjfb',
        title: 'Finish the essay collab',
        isCompleted: false,
    },
    {
        _id: 'kfjhs',
        title: 'Read the book',
        isCompleted: false,
    },
    {
        _id: 'lsjfb',
        title: 'Write a letter',
        isCompleted: false,
    },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    if (current) {
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
    }
  };

  const removeTodo = (id) => setTodos(todos.filter(t => t._id !== id));

  const addTodo = (title) => {
    if (title.trim() !== '') {
      setTodos([
        {
          _id: new Date().toString(),
          title,
          isCompleted: false,
        },
        ...todos, 
      ]);
    }
  };

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className="text-2xl font-bold text-center mb-10">To Do</h1>
      <CreateTodoField addTodo={addTodo} /> 
      {todos.map(todo => (
        <Todoitem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
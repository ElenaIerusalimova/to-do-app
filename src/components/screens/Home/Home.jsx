import React, { useState } from "react";
import Todoitem from "./item/Todoitem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import { defaultValue } from "./constants";
import styles from './Home.module.css';

const Home = () => {
  const [todos, setTodos] = useState(defaultValue);
 
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    if (current) {
      //removeTodo(id);
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
    }
  };

  const removeTodo = (id) => {
    console.log('remove id', id);
    setTodos(todos.filter(t => t._id !== id));
  }

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

  console.log('todos', todos);

  // if (!data || !data.length) {
  //   return (<>
  //     Empty list
  //   </>)
  // }
  return (
    <div className={styles.todoContainer}> 
      <h1 className={styles.todoTitle}>To Do</h1> 
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
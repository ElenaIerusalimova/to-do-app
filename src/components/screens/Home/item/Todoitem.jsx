import React from 'react'
import Check from './Check'
import {BsTrash} from 'react-icons/bs'
import styles from './Todoitem.module.css';
import classNames from 'classnames';

const Todoitem = ({todo, changeTodo, removeTodo}) => {
    const { isCompleted, title } = todo;

    return (
        <div className={styles['todo-item-wrapper']}> 
            <button
                onClick={() => changeTodo(todo._id)}
                className={classNames(
                    styles['toggle-button'], 
                    { [styles['toggle-button-completed']]: isCompleted } 
                )}
            >
                <Check isCompleted={isCompleted}/> 
                <span className={classNames(
                    styles['todo-title'], 
                    { [styles['todo-title-completed']]: isCompleted } 
                )}>
                    {title}
                </span>
            </button>

            <button
                onClick={() => removeTodo(todo._id)}
                className={styles.removeIcon} 
            >
                <BsTrash
                    size={22}
                    className={styles.removeIcon}
                />
            </button>
        </div>
    )
}

export default Todoitem;
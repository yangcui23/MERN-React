import React, { useState } from 'react';
import styles from './list.module.css';

const Todo = (props) => {
    const {todos, setTodos} = props;




    
    const deleteTask = (deleteItem) => {
        setTodos(todos.filter((task, i) => {
            return deleteItem !== i;
        }));
    }

    const handleCheck = (i) => {
        const copyTodos = [...todos];
        copyTodos[i].isDone = !copyTodos[i].isDone;

        setTodos(copyTodos);
    }
    return(
        <div>
            {todos.map((task, i) => {
                const taskStyle = {
                    display: 'inline=block'
                    
                };

                if (task.isDone) {
                    taskStyle.textDecoration = "line-through";
                }
                return(
                    <div key={i} className={styles.list}>
                        <h5 style={taskStyle}>{task.name}</h5>
                        <input onChange={(e) => {handleCheck(i);}} type="checkbox" checked={task.isDone} className={styles.input}/>
                        <button onClick={(e) => {deleteTask(i);}} className='btn btn-danger'>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}


export default Todo;
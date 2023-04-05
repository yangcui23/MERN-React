import React, { useState } from "react";
import Todo from './todo_list';
import Form from 'react-bootstrap/Form';
import styles from './style.module.css';

const Input = (props) => {
    const [todolist, setTodoList] = useState([]);

    const [task, setTask] = useState({ name: "", isDone: false });

    const onChange = (event) => {
        setTask({
            name: event.target.value,
            isDone: false
        });
    };

    const addTask = (event) => {
        event.preventDefault();
        const newTodos = [...todolist, task];
        setTodoList(newTodos);

        setTask({name: "", isDone: false});
    }

    return (
        <div>
            <form onSubmit={addTask} className="form-control">
                <h1>To do list</h1>
                <input type="text" name="task" onChange={onChange} value={task.name} className="form-control"/>
                <input type="submit" value="Add task" className="btn btn-primary"/>
            </form>
            <Todo todos={todolist} setTodos={setTodoList} />
        </div>
    )


}
export default Input;
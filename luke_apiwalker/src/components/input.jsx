import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './input.module.css'


const Input = (props) => {
    const navigate = useNavigate();
    const {search, setSearch } = props;




    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/${search.category}/${search.id}`);
    }

    const onChangeHandler = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler} className='form'>
                <label>Search For :</label>
                <select onChange={onChangeHandler} name= 'category' value={search.category}>
                    <option name=" people " value='people'>People</option>
                    <option name = "planets " value='planets'>planets</option>
                </select>
                <input onChange={onChangeHandler} type="number" name='id' className='form-control' value={search.id}/>
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    )

}


export default Input;
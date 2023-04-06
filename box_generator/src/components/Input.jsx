import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './display.module.css';

const Input = (props) => {
    const {inputs, setInputs} = props;

    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {
            color : color,
        };
        setInputs([...inputs, newBox]);
        

        setColor("");
    };

    




    return (
        <form onSubmit={createBox} className='form'>
            <div className='form-group'>
                <h1>Color</h1>
                <input onChange={(e) => setColor(e.target.value)} type="text" value={color} className='form-control'/>

            </div>
            
            <button type="submit" value="New Box" className='btn btn-primary' >New Box</button>
        </form>
    );
};

export default Input;

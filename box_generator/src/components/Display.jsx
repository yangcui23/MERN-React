import React, { useState } from 'react';
import styles from './display.module.css'

const DisplayBox = (props) => {

    const inlineStyles = {
        width : '300px',
        height : '300px',
        backgroundColor: props.inputs.color ,
        border : '1px black solid',
        display : 'block',
        margin : '0px 0px 0px 0px'
    };
    return (

            
        <div style={inlineStyles} className={styles.div}></div>

    );
};

export default DisplayBox;


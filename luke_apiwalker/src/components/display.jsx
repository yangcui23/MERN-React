import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from './input.module.css'


const Display = (props) => {
    const {category , data} = props;

    
    return (
        <div>
            { category === "planets"?
                <>
                <h1>{data.name}</h1>


                <p>Climate : {data.climate}</p> 
                <p>Terrain : {data.terrain}</p>
                <p>Surface Water : {data.surface_water}</p>
                <p>Population : {data.population}</p>
                </>
                
                
                
                
                : 
                <>
                <h1>{data.name}</h1>
                <p>Height :{data.height}</p>
                <p>Mass :{data.mass}</p>
                <p>Gender :{data.gender}</p>
                <p>Hair Color :{data.hair_color}</p>
                </>
            }
        </div>
    )
}

export default Display;
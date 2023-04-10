import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from './input'
import Display from './display';
import axios from 'axios';
const Results = (props) => {
    const navigate = useNavigate();
    const { category, id } = useParams();

    const [responseData, setResponseData] = useState('');


    const { search } = props;




    useEffect(() => {
        axios.get(`http://swapi.dev/api/${category}/${id}/`)
            .then((response) => {
                console.log('hello')
                
                if (category === "planets") {
                    
                    setResponseData(response.data);
                    console.log(response.data);




                } 
                else if (category === "people") {
                    setResponseData(response.data)

                }
                })
            .catch((error) => {

                console.log("error response:", error);
                navigate("/notfound");
            });
    }, [responseData])
    return (
        <div>
            <Display data={responseData} category={search.category}/>
        </div>
    );
};

export default Results;
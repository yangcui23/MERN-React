import React, { useState } from "react";
import axios from 'axios';

const AxiosPokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);


    const handleClick = () => {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemons(response.data.results));
            
    };

    return (

            <div>
                <button onClick={handleClick}>Get Pokemon</button>
                {pokemons.map((pokemon) => {
                    return (
                        <li >
                            {pokemon.name}
                        </li>
                    )
                })}

            </div>
        )



}


    export default AxiosPokemon;
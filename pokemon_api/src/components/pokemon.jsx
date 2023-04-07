import React, { useState } from "react";


const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const handleClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }


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


export default Pokemon;
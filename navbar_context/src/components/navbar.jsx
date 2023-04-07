import React, { useContext }  from 'react'

import MyContext from '../context/context';

const NavBar =(props) => {



    const {name} = useContext(MyContext)
    
    
    
    return (
        <div className="navbar">
            <h3 className='name'>Hello : {name}</h3>
        </div>
    )
}

export default NavBar;
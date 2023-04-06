
import React, { useState } from 'react';


const Tabs = (props) => {
    const {selectedIndex , title , tabs , setTabs} = props;

    const handleClick = () => {

        const fromTabs = [...tabs];

        fromTabs.map(eachTab => eachTab.selected = false);

        const fromTab = {...tabs[selectedIndex]};
        fromTab.selected = true;

        fromTabs[selectedIndex] = fromTab;

        setTabs(fromTabs);




    }
    return(
        <div className='tab'>
            <button onClick={handleClick}>{ title }</button>
        </div>
    );
}


export default Tabs;
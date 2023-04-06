import React, { useState } from 'react';
import Input from './components/Input';
import DisplayBox from './components/Display';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [boxes, setBox] = useState([]);


  return (
    <div className="App">
      <Input inputs={boxes} setInputs={setBox} />
      { boxes.map( (box, i) => {
        return (
          <div key={i} className="div">  
            <DisplayBox inputs={box} />

          </div>
        );


      })}

    </div>
  );
}


export default App;


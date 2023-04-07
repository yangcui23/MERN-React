import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wrapper from './components/wrapper';
import MyContext from './context/context'
import Navbar from './components/navbar';
import FormWrapper from './components/formWrapper';

function App() {
  const [name , setName ]  = useState('');
  return (
    <MyContext.Provider value={{name,setName}}>
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </MyContext.Provider>
  );
}



export default App;
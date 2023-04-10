import React ,{useState} from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home'
import NotFound from './components/notfound';
import Results from './components/result';
import Input from './components/input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [search, setSearch] = useState({
    category: 'planets',
    id: "",
  });

  return (
    <div className="App">
      <Input search = {search} setSearch={setSearch}/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:category/:id' element = {<Results search = {search} setSearch={setSearch} />}/>
        <Route path='/notfound' element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;

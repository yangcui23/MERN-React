import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>

    </div>
  );
}

const Word = (props) => {
  const {word , color , background} = useParams();
  

  return (
    <div className='word'  >
      {
        isNaN(word) ?
        <h1 style={{color : color , background : background }} className='h1'>The word is {word}</h1>:
        <h1>The number is {word}</h1>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}/>

        <Route path='/:word' element={< Word />} />
        <Route path='/:word/:color/:background' element={< Word />} />
      </Routes>
    </div>
  );
}

export default App;

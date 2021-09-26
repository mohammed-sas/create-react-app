import logo from './logo.svg';
import './App.css';
import User from './User';
import {useState} from 'react'

function App() {
  const[heading,setheading] = useState('p');
  return (
 
    <div className="App">
         <User heading={heading}/>
         
         <button onClick={() => setheading('h1')}>h1</button>
         <button onClick={() => setheading('h2')}>h2</button>
         <button onClick={() => setheading('h3')}>h3</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from "./Header.js"
import arrowleft from "./icons8-arrow-pointing-left-100.png";
import arrowright from "./icons8-arrow-100.png";

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      <div className="arrows">
      <img src={arrowleft}></img>
      <img src={arrowright}></img>
      </div>
      
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

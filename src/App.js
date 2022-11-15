import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import Image from 'react-native';

function App() {
  const dUrl = "https://random.dog/woof.json";
  const url = fetch(dUrl).then(res => res.json);
  console.log(dUrl);

  return (
    <div className="App">
      <img source = {{dUrl}} />
      <a>{dUrl}</a>
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

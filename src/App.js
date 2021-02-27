import './App.css';
import React from 'react';
import background3 from "../public/img/WIP.jpg";
import CountDownTimer from '../src/CountDownTimer';

function App() {
  
  return (
    <div className="App"> 
      <header className="App-header"
      style={{ backgroundImage: `url(${background3})` }}
      >
      <div class="box">
        <p>
        Hi, I am Debarghya Goswami.<br/><br/>
        I am working really hard on creating my portfolio website.
        </p>
      </div>
        
        <div>
              <CountDownTimer />
        </div>
      </header>
    </div>
  );
}

export default App;

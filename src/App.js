
import './App.css';
import React, { useState } from "react";
import Display from './Display.js';


function App() {
  
  const [display, setDisplay] = useState([]);

  

  const aa = () => {
    setDisplay(display.concat(<Display key={display.length} />));
  }
  
  return (
    <div className="App">

      <button onClick={aa}> here</button>
      <div>
        {display}

      </div>
      {display}
      
      




    </div>
  );
}

export default App;
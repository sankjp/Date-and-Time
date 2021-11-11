import React from 'react';
import './App.css';

function App() {
  const name="santanu banerjee";
  const currentDate=new Date().toLocaleDateString();
  const currentTime=new Date().toLocaleTimeString();
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <p>Current date is:{currentDate}</p>
      <p>Current time is:{currentTime}</p>
    </div>
  );
}

export default App;

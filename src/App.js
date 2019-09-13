import React from 'react';
import './App.css';
import Login from './Components/login';
import Notes from './Holi';


function App() {
  return (
    <div className="App">
      <br></br>
      <header className="App-header">
        <p id="title">Notepad</p>
      
 <img src="http://animaticons.co/wp-content/uploads/2015/10/animat-pencil-512x512-color.gif" className="App-logo" alt="logo" />
      
        <Login />
        <Notes/>
      </header>
    </div>
  );
}
export default App;
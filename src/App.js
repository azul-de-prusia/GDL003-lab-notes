import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Notepad</p>
        <button type="button" class="newUser">Sign in</button>
        <button type="button" class="bttnlogProvider">Login with facebook<img src="https://www.1-stopmedia.com/wp-content/uploads/2016/08/097668-black-ink-grunge-stamp-textures-icon-social-media-logos-facebook-logo-square.png" width="2rem" height="2rem"/></button>
        <img src="http://animaticons.co/wp-content/uploads/2015/10/animat-pencil-512x512-color.gif" className="App-logo" alt="logo" />
        
        <p>
          My note here
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

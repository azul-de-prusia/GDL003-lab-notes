import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends Component {
  render (){
    import Login from './Components/login';
    import Notes from './Components/notes';
function App(){
    return (

      <BrowserRouter>
      <Switch> 
         <Route exact path="/login" component={Login}/>
         <Route exact path="/notes" component={Notes}/>


     </Switch>
     </BrowserRouter>


  );
}
  }}
export default App; 


    /*<div className="App">
      <header className="App-header">
        <p>Notepad</p>
        <img src="http://animaticons.co/wp-content/uploads/2015/10/animat-pencil-512x512-color.gif" className="App-logo" alt="logo" />
        
        <p>My note here</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />*/
       
      /*  <Hola/>
      </header>
    </div>
  );
}

export default App;
*/
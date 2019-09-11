/*import React, { Component } from 'react';
 
class Hola extends Component {
  render() {
    return (
      <h1>Hola mundo</h1>
    );
  }
}
 
export default Notes;*/


import React from 'react';
import Note from '../Components/Note'
// import List from '../components/List';

class Notes extends React.Component {

  render() {
    return (
    <div>
      <div>
        <p>Title</p>
        <Note />
      </div>
      <div>
        <Note />
      </div>
      <div>
        <Note />
      </div>
    </div>

    );
  }
}

export default Notes; 
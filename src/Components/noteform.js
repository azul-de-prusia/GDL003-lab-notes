import React, {Component} from 'react';
//import Note from './note';

class Notesform extends Component{
    constructor() {
        super();
     this.addNote = this.addNote.bind(this);
    }
    addNote(){
        this.props.addNote(this.textInput.value);
        this.textInput.value = "";
        this.textInput.focus();
    }
    render() {
        return(
        <div>
            <input 
            ref={input => {this.textInput = input; }} 
            type="text" placeholder="Add note" className="addNote"></input>
            <button 
            onClick={this.addNote} className="newNoteButton">Add note</button>
        </div>
        )
    }
} 

export default Notesform;
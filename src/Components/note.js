import React, {Component} from 'react';
//import './App.css';

class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }
handleRemove (id){
    alert('remove:' , id)
}

    render(){
        return(
        <div className='Note'>
            <li>{this.noteId} - </li>
            <span
            onClick={() => this.handleRemove(this.noteId)}
            >&times;</span>
            <p>{this.noteContent}</p>
        </div>
        )
    }
}

export default Note;


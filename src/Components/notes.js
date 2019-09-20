import React, {Component} from 'react';
import firebaseConfig from 'firebase';
import Note from './note';
import Notesform from './noteform';
//import firebase, { initializeApp } from 'firebase';
import 'firebase/database';

//const firebaseApp = firebase.initializeApp (firebaseConfig);

class Notes extends Component {
  constructor(){
    super();
    this.state={
      notes:[
        //{noteId: 1, noteContent: 'note 1'},
        //{noteId: 2, noteContent: 'note 2'}
      ]
    };
    this.app=firebaseConfig;
    this.db=this.app.database().ref().child('notes');
    this.addNote=this.addNote.bind(this);
  }

  componentDidMount(){
    const {notes} = this.state;
    this.db.on('child_added', snap => {
      notes.push({
        noteId: snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({notes});
    });
  }

  removeNote(){
  }

  addNote(note){
 // const{notes} = this.state
  //notes.push({
    //noteId: notes.length + 1,
    //noteContent: note
  //});
  //this.setState({ notes });
    this.db.push().set({noteContent: note});    
    }

  render(){
    return (
    <div classname="notesContainer" class="notesContainer">
        <div className="notesHeader">
        <h1>Dreamnotes</h1>
        </div>
           <div className='notesBody'>
             <ul>
             {this.state.notes.map(note => {
               return(
                <Note
                noteContent={note.noteContent}
                noteId={note.noteId}
                key={note.noteId}
                />
               )
             })
             }
            <div>
            <textarea class="monday" rows="10" cols="20">Write your monday´s dream here</textarea>
            <button>Save</button>
            </div>
            <div>
            <textarea class="tuesday" rows="10" cols="20">Write your tuesday´s dream here</textarea>
            </div>
            <div >
            <textarea class="wednesday" rows="10" cols="20">Write your wednesday´s dream here</textarea>
            </div>
            <div>
            <textarea class="thursday" rows="10" cols="20">Write your thursday´s dream here</textarea>
            </div>
            <div>
            <textarea class="friday" rows="10" cols="20">Write your friday´s dream here</textarea>
            </div>
            <div>
            <textarea class="saturday" rows="10" cols="20">Write your saturday´s dream here</textarea>
            </div>
            <div>
            <textarea class="sunday" rows="10" cols="20">Write your sunday´s dream here</textarea>
            </div>
            </ul>
      </div>
      <div className='notesFooter'>
             <Notesform
             addNote={this.addNote}
             ></Notesform>
      </div>
    </div>
    );
  }
}

export default Notes; 
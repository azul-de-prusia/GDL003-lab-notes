import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import '../App.css';
import '../firebase.js'

class Login extends Component {
    render() {
        const {user, signOut, signInWithGoogle} = this.props;
        return (
            <div className="App">
            <br></br>
            <header className="App-header">
              <p id="title">Notepad</p>
            
       <img src="http://animaticons.co/wp-content/uploads/2015/10/animat-pencil-512x512-color.gif" className="App-logo" width="200" height="200"alt="logo" />
            </header>
          
            <div className="buttonsLog">
                {
                    user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in to open up your notebook</p>
                }
                {
                    user 
                    ? <button onClick ={signOut}>Sign out</button>
                    : <button onClick = {signInWithGoogle}>Sign in with gmail</button>
                }
            </div>
            </div>
        );
    }
}

const firebaseAppAuth = firebase.auth();
const providers = {
googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth, 
})(Login); 
import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcz1rh_a_RvwArbynLPIfQcUYVZpVzrsY",
    authDomain: "kiel-bloc-chat.firebaseapp.com",
    databaseURL: "https://kiel-bloc-chat.firebaseio.com",
    projectId: "kiel-bloc-chat",
    storageBucket: "kiel-bloc-chat.appspot.com",
    messagingSenderId: "203486657009"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="app-header">
        <header className="app-title">
          <h1>Bloc Chat</h1>
        </header>          
        <section className="room-list">
          <RoomList firebase={firebase}/>
        </section>
      </div>
    );
  }
}
  
export default App;

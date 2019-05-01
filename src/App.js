import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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

  constructor(props) {
    super(props);
    this.state = {
      currentRoom: '', 
      /* currentRoomKey: '', */
    };
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }
/* 
  handleRoomClick(room) {
    this.setState({
      currentRoom: room.name,
      currentRoomKey: room.key,
    });
  }  */

  handleRoomClick(room) {
    this.setState({ currentRoom: room.name });
    this.setState({ currentRoomId: room.key})
  }

  render() {
    return (
      <div className="appHeader">
        <header className="appTitle">
          <h1>Bloc Chat</h1>
          <h2>Current Room: {this.state.currentRoom}</h2>
        </header>    
        <section className="rows">    
          <section className="roomList">
            <RoomList 
              handleRoomClick={this.handleRoomClick}            
              firebase={firebase}/>
          </section>

          <section className="messageList">
            <MessageList 
              currentRoom={this.state.currentRoom} 
              currentRoomId={this.state.currentRoomId}
              firebase={firebase}/>
          </section>
        </section>  

      </div>
    );
  }
}
  
export default App;

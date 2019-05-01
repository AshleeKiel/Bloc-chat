import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.messageRef = this.props.firebase.database().ref('rooms');
        this.messageRef = this.props.firebase.database().ref('messages');
   }

    componentDidMount () {
        this.messageRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) });
        });
    }


    render () {
        return (
            /* console.log(this.state.messages), */
            <section className="messages">
                <h3>{this.props.currentRoom}</h3>
                    {this.state.messages
                        .filter (message => 
                         this.props.currentRoom === message.roomId)
                        .map( (message, index) => (
                            console.log(message)
/*                          <div key={index}>
                            <div>{message.username}</div>
                            <div>{message.content}</div>
                            <div>{message.sentAt}</div>
                        </div>  */
                         ))
                        }
            </section>
        )
    }
}

export default MessageList;

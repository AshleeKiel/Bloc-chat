import React, {Component} from 'react';

class RoomList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rooms: [],
        newRoomName: ''
      };

    this.roomsRef = this.props.firebase.database().ref('rooms');

    }

    componentDidMount () {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
        });
    }

    handleChange(event) {
        this.setState({newRoomName: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //if not blank
        if(this.state.newRoomName !== '') {
            this.roomsRef.push({
                name: this.state.newRoomName
            });
            //clear after creating new
            this.setState({newRoomName: ''});
        }
    }

    render () {
        return (
            <section className="chatRooms">
                {this.state.rooms.map( (room) => 
                   <div key={room.key}>{room.name}</div>
                )}

                <form className="newRoomForm" 
                    onSubmit={(e) => this.handleSubmit(e)}>
                    <input 
                        name="newRoomTextBox" 
                        type="text" 
                        value={this.state.newRoomName}
                        onChange={(e) => this.handleChange(e)} />
                    <input
                        type="submit"
                        value="Add New Room" />
                </form>
            </section>
        );
    }

}

export default RoomList;

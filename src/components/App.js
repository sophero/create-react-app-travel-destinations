import React, { Component } from 'react';
import axios from 'axios';
import DestinationList from './DestinationList';
import NewUser from './NewUser';
// import '../css/App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            current_user: null
        }
        this.createUser = this.createUser.bind(this);
    }

    render() {
        if (this.state.current_user) {
            return(
                <div>
                    <DestinationList />
                </div>
            );

        } else {
            return(
                <NewUser createUser={this.createUser} />
            );
        }
    }

    createUser(user) {
        console.log(user);
        axios.post('/users', {
            user: user
        }).then((response) => {
            console.log(response.data);
            this.setState({current_user: true})
        }).catch((error) => {
            console.log(error);
        });
    }

}

export default App

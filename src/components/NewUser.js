import React, { Component } from 'react';
// import '../css/NewUser.css';

class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    render() {

        return(
            <div>
                <div>
                    Username: <input type="text" onChange={this.updateUsername} value={this.state.username} />
                </div>
                <div>
                    Password <input type="password" onChange={this.updatePassword} value={this.state.password} />
                </div>
                <div>
                    <button onClick={this.handleCreateUser}>Create New User</button>
                </div>
            </div>
        );
    }

    handleCreateUser() {
        this.props.createUser(this.state);
        this.setState({
            username: "",
            password: ""
        });
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }
}

export default NewUser

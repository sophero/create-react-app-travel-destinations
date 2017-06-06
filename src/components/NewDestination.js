import React, { Component } from 'react';
import '../css/NewDestination.css';

class NewDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            image_url: ""
        }
        this.handleCreateDestination = this.handleCreateDestination.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateDescr = this.updateDescr.bind(this);
        this.updateImgUrl = this.updateImgUrl.bind(this);
    }

    render() {

        return(
            <div>
                <div>
                    Name: <input onChange={this.updateName} value={this.state.name} className="new-destination__input"/>
                </div>
                <div>
                    Description: <input onChange={this.updateDescr} value={this.state.description} className="new-destination__input" />
                </div>
                <div>
                    Image URL: <input onChange={this.updateImgUrl} value={this.state.image_url} className="new-destination__input" />
                </div>
                <div>
                    <button className="new-destination__submit-btn" onClick={this.handleCreateDestination}>Add Destination</button>
                </div>
            </div>
        )
    }

    handleCreateDestination() {
        this.props.createDestination(this.state);
        this.setState({
            name: "",
            description: "",
            image_url: ""
        });
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateDescr(event) {
        this.setState({description: event.target.value});
    }

    updateImgUrl(event) {
        this.setState({image_url: event.target.value});
    }
}

export default NewDestination

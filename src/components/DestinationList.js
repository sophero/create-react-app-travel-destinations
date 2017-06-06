import React, { Component } from 'react';
import axios from 'axios';
import Destination from './Destination';
import NewDestination from './NewDestination';
import '../css/DestinationList.css';

class DestinationList extends Component {
    constructor() {
        super();
        this.state = {
            destinations: []
        }
        this.updateList = this.updateList.bind(this);
        this.createDestination = this.createDestination.bind(this);

        this.updateList();
    }

    createDestination(destination) {
        console.log(destination);
        axios.post('/destinations', {
            destination: destination
        }).then((response) => {
            this.setState({
                destinations: response.data
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    updateList() {
        axios.get('/destinations').then((response) => {
            console.log(response);
            this.setState({
                destinations: response.data
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {

        let list = this.state.destinations.map(function(destination, index) {
            return(
                <div className="destination-list-item" key={index}>
                    <Destination destination={destination} />
                </div>
            )
        });

        return(
            <div>
                <div className="new-destination-form">
                    <NewDestination createDestination={this.createDestination} />
                </div>
                <div className="destination-list">
                    {list}
                </div>
            </div>

        )
    }
}

export default DestinationList

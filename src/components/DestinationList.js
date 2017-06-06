import React, { Component } from 'react';
import axios from 'axios';
import Destination from './Destination'
import '../css/DestinationList.css';

class DestinationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destinations: []
        }
        this.updateList = this.updateList.bind(this);

        this.updateList();
    }

    updateList() {
        axios.get('/destinations').then((response) => {
            console.log(response);
            this.setState({
                destinations: response.data
            });
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
            <div className="destination-list">
                {list}
            </div>
        )
    }
}

export default DestinationList

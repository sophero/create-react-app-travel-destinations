import React, { Component } from 'react';
import axios from 'axios';

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
                    <div className="destination-list-item__image-container">
                        <img src={destination.image_url} alt={destination.name} />
                    </div>
                    <div className="destination-list-item__name">
                        {destination.name}
                    </div>
                    <div className="destination-list-item__description">
                        {destination.description}
                    </div>
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

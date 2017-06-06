import React from 'react';
import '../css/Destination.css';

function Destination(props) {

    let imgDivStyle = {
        backgroundImage: "url('" + props.destination.image_url + "')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return(
        <div>
            <div className="destination-list-item__image" style={imgDivStyle}></div>
            <div className="destination-list-item__name">
                {props.destination.name}
            </div>
            <div className="destination-list-item__description">
                {props.destination.description}
            </div>
        </div>
    )
}

export default Destination

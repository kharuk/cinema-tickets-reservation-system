import React from 'react';
import SeatsScheme from './SeatsScheme';
//import DisplaySeatTypes from './DisplaySeatTypes';

const DisplaySeatsScheme = (props) =>{
    return(
        <div className="seats-scheme__container">
            <SeatsScheme
                seatsArray={props.seats}
                callBackFromParent={props.callBackHandleSeatClick}
            />
        </div>
    );
}

export default DisplaySeatsScheme;
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
      {  
        props.chosenSeats.length === 5
        ? <div className="font-large font-bold">
            You have chosen maximum count of seats.
        </div>
        : ''
      }
    </div>
  );
}

export default DisplaySeatsScheme;
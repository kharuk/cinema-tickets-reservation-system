import React from 'react';
import DisplaySeatsScheme from './DisplaySeatsScheme';
import DisplayChosenSeats from './DisplayChosenSeats';

const SeatSelect = (props) =>{
    
  return(
    <div className="choose-seat__container">
      <DisplaySeatsScheme
        seats={props.seats}
        callBackHandleSeatClick={props.callBackHandleSeatClick}
        chosenSeats={props.chosenSeats}
       // sessionSeatTypes={props.sessionSeatTypes}
      />
      <div className="chosen-seats__container">
        <DisplayChosenSeats
          chosenSeats={props.chosenSeats}
          sessionSeatTypes={props.sessionSeatTypes}
        />
      </div>
    </div>
  );
}

export default SeatSelect;
import React from 'react';
import DisplaySeatsScheme from './DisplaySeatsScheme';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';

const SeatSelect = (props) =>{

  function countTotalPrice (chosenSeats, sessionSeatTypes){
    return chosenSeats.reduce((sum, current) => 
    sum + sessionSeatTypes[current.type], 0);
  }
      
  return(
    <div className="choose-seat__container">
      <DisplaySeatsScheme
        seats={props.seats}
        callBackHandleSeatClick={props.callBackHandleSeatClick}
        chosenSeats={props.chosenSeats}
        sessionSeatTypes={props.sessionSeatTypes}
      />
      <div className="chosen-seats__container">
        {
          props.chosenSeats.length !== 0
          ?
          <Header header="Chosen seats"/>
          :
          ''
        }
        <DisplayChosenSeats
          chosenSeats={props.chosenSeats}
          sessionSeatTypes={props.sessionSeatTypes}
        />
      </div>
      <div className="font-x-large">
        <span>Total : </span>
        {
            countTotalPrice(props.chosenSeats, props.sessionSeatTypes)
        }
      </div>
    </div>
  );
}

export default SeatSelect;
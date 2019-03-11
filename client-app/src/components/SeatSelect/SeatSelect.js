import React from 'react';
import DisplaySeatsScheme from './DisplaySeatsScheme';

const SeatSelect = (props) =>{
    
    return(
        <div className="choose-seat__container">
            <DisplaySeatsScheme
                seats={props.seats}
                callBackHandleSeatClick={props.callBackHandleSeatClick}
                chosenSeats={props.chosenSeats}
            />
        </div>
    );
}

export default SeatSelect;
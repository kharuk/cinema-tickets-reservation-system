import React from 'react';
import SeatInfoBox from './SeatInfoBox';

const DisplayChosenSeats = (props) =>{
    
  const generateKey = (row, column) =>{
    return row * props.chosenSeats.length + column;
  }
  
  return(
    <div className="seat-info-list__container">
      {
        props.chosenSeats.map((item)=>
          <SeatInfoBox
            key={generateKey(item.row, item.column)}
            seatInfo={item}
            price={props.sessionSeatTypes[item.type]}
          />
        )
      }
    </div>
  );
}

export default DisplayChosenSeats;
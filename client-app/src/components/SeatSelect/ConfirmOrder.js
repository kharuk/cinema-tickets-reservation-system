import React from 'react';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';
import RoutingButton from './RoutingButton';

const ConfirmOrder = (props) =>{

  function countTotalPrice (chosenSeats, sessionSeatTypes){
    return chosenSeats.reduce((sum, current) => 
    sum + sessionSeatTypes[current.type], 0);
  }
      
  return(
    <div className="choose-seat__container">
      <div className="chosen-seats__container">
        <Header header="Chosen seats"/>
        <DisplayChosenSeats
          chosenSeats={props.chosenSeats}
          sessionSeatTypes={props.sessionSeatTypes}
        />
      </div>
      <div>
        <span>Total : </span>
        {
            countTotalPrice(props.chosenSeats, props.sessionSeatTypes)
        }
      </div>
      <RoutingButton 
        isSeatsChosen={props.isSeatsChosen}
        chosenSeats={props.chosenSeats}
        callBackHandleCancel={props.callBackCancelConfirm}
      />
    </div>
  );
}

export default ConfirmOrder;
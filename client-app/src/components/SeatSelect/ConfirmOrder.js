import React, {Fragment} from 'react';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';
import RoutingButton from './RoutingButton';
import OutputPrice from './OutputPrice';

const ConfirmOrder = (props) =>{

      
  return(
    <div className="choose-seat__container">
      <div className="chosen-seats__container">
        <Header header="Chosen seats"/>
        <DisplayChosenSeats
          chosenSeats={props.chosenSeats}
          sessionSeatTypes={props.sessionSeatTypes}
        />
      </div>
      <OutputPrice 
       chosenSeats={props.chosenSeats}
       chosenExtraServices={props.chosenExtraServices}
       sessionSeatTypes={props.sessionSeatTypes}
       extraServices={props.extraServices}
      />
      <RoutingButton 
        isSeatsChosen={props.isSeatsChosen}
        chosenSeats={props.chosenSeats}
        callBackHandleCancel={props.callBackCancelConfirm}
      />
    </div>
  );
}

export default ConfirmOrder;
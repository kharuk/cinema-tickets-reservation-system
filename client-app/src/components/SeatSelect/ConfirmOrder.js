import React from 'react';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';
import RoutingButton from './RoutingButton';
import OutputPrice from './OutputPrice';
import DisplayChosenExtraServices from './DisplayChosenExtraServices';
import DisplayOrderInfo from './DisplayOrderInfo';

const ConfirmOrder = (props) =>{

      
  return(
    <div className="confirm-order__container">
      <div className="row">
        <DisplayOrderInfo sessionInfo={props.sessionInfo}/>

        <OutputPrice 
        chosenSeats={props.chosenSeats}
        chosenExtraServices={props.chosenExtraServices}
        sessionSeatTypes={props.sessionSeatTypes}
        extraServices={props.extraServices}
        />
      </div>

      <div className="chosen-seats__container">
        <Header header="Chosen seats" className="confirm-order__header"/>
        <DisplayChosenSeats
          chosenSeats={props.chosenSeats}
          sessionSeatTypes={props.sessionSeatTypes}
        />
        {
          Object.keys(props.chosenExtraServices).length !== 0
          ?
          <Header header="complementary services" className="confirm-order__header"/>
          :
          ''
        }  
        <DisplayChosenExtraServices 
          chosenExtraServices={props.chosenExtraServices}
          extraServices={props.extraServices}
        />
      </div>

      <RoutingButton 
        callBackHandleConfirmation={props.callBackConfirmReservation}
        isSeatsChosen={props.isSeatsChosen}
        chosenSeats={props.chosenSeats}
        callBackHandleCancel={props.callBackCancelConfirm}
      />
    </div>
  );
}

export default ConfirmOrder;
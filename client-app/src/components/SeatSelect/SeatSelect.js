import React, { Fragment } from 'react';
import DisplaySeatsScheme from './DisplaySeatsScheme';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';
import RoutingButton from './RoutingButton';
import OptionSelect from './OptionSelect';
import OutputPrice from './OutputPrice';
import DisplaySeatsType from './DispalySeatsType';

const SeatSelect = (props) =>{

  return(
    <div className="choose-seat__container">
      <DisplaySeatsType
        sessionSeatTypes={props.sessionSeatTypes}
      />
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
        <Header header="complementary services"/>
        <OptionSelect 
          callBackCheckBoxChanged={props.callBackCheckBoxChanged}
          extraServices={props.extraServices} 
          chosenExtraServices={props.chosenExtraServices}
          callBackHandleClick={props.callBackHandleExtraServicesSelect}
        />  
        <OutputPrice 
          chosenSeats={props.chosenSeats}
          chosenExtraServices={props.chosenExtraServices}
          sessionSeatTypes={props.sessionSeatTypes}
          extraServices={props.extraServices}
        />   

      <RoutingButton 
        chosenSeats={props.chosenSeats}
        callBackHandleConfirmation={props.callBackHandleSeatsSelect}
      />
    </div>
  );
}

export default SeatSelect;
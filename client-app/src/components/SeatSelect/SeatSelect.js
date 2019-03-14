import React, { Fragment } from 'react';
import DisplaySeatsScheme from './DisplaySeatsScheme';
import DisplayChosenSeats from './DisplayChosenSeats';
import Header from '../Authentication/Header';
import RoutingButton from './RoutingButton';
import OptionSelect from './OptionSelect';
import OutputPrice from './OutputPrice';

const SeatSelect = (props) =>{

  function countTotalPrice (chosenSeats, chosenExtraServices, sessionSeatTypes, extraServices){
    let priceOfTickets = chosenSeats.reduce((sum, current) => 
    sum + sessionSeatTypes[current.type], 0);

    let priceOfExtraServices = Object.keys(chosenExtraServices).reduce((sum, current) =>
    sum + chosenExtraServices[current]*extraServices[current], 0);
    return {priceOfTickets, priceOfExtraServices};
  }

  const outputPrice = () => {
    let price = countTotalPrice(props.chosenSeats, props.chosenExtraServices, props.sessionSeatTypes, props.extraServices);
    let ticketsPrice = price.priceOfTickets;
    let extraServicesPrice = price.priceOfExtraServices;
    let totalPrice = ticketsPrice + extraServicesPrice;
    return (
      <Fragment>
        <span className="output-price__item">
          {`Tickets price : ${ticketsPrice}`}
        </span> 
        <span className="output-price__item">
          {`Extra services price : ${extraServicesPrice}`}
        </span>
        <span className="output-price__item">
          {`Total price :  ${totalPrice}`}
        </span>
      </Fragment>
    )
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
        <Header header="complementary services"/>
        <OptionSelect 
          //count={props.count}
        //  isSelect={props.isSelect}
          //isExtraServicesChosen={props.isExtraServicesChosen}
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
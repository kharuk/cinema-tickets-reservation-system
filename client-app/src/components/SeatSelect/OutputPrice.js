import React from 'react';
import reservationServise from '../../services/ReservationServices';


const outputPrice = (props) => {
  let price = reservationServise.countTotalPrice(props.chosenSeats, props.chosenExtraServices, props.sessionSeatTypes, props.extraServices);
  let ticketsPrice = price.priceOfTickets;
  let extraServicesPrice = price.priceOfExtraServices;
  let totalPrice = ticketsPrice + extraServicesPrice;
  return (
    <div className="output-price__container">
      <span className="output-price__item">
        {`Tickets price : ${ticketsPrice}`}
      </span> 
      <span className="output-price__item">
        {`Extra services price : ${extraServicesPrice}`}
      </span>
      <span className="output-price__item">
        {`Total price :  ${totalPrice}`}
      </span>
    </div>
  );
}

export default outputPrice;
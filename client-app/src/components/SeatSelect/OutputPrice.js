import React from 'react';
import reservationHelpers from '../../helper/ReservationHelpers';

const OutputPrice = (props) => {
  let price = reservationHelpers.countTotalPrice(props.chosenSeats, props.chosenExtraServices, props.sessionSeatTypes, props.extraServices);
  let ticketsPrice = price.priceOfTickets;
  let extraServicesPrice = price.priceOfExtraServices;
  let totalPrice = ticketsPrice + extraServicesPrice;
  return (
    <div className="col-12 col-md-5 output-price__container">
      <div className="output-price__wrapper">
        <h5>Cart Total</h5>
        <ul className="output-price__list">
            <li><span>Tickets price :</span> <span>{ticketsPrice || 0}</span></li>
            <li><span>Extra services price :</span> <span>{extraServicesPrice || 0}</span></li>
            <li><span>Total price : </span> <span>{totalPrice || 0}</span></li>
          </ul>  
      </div>
    </div>
  );
}

export default OutputPrice;
import React from 'react';
import reservationServise from '../../services/ReservationServices';
import Header from '../Authentication/Header';


const outputPrice = (props) => {
  let price = reservationServise.countTotalPrice(props.chosenSeats, props.chosenExtraServices, props.sessionSeatTypes, props.extraServices);
  let ticketsPrice = price.priceOfTickets;
  let extraServicesPrice = price.priceOfExtraServices;
  let totalPrice = ticketsPrice + extraServicesPrice;
  return (
    <div className="col-12 col-md-5 output-price__container">
      <div className="output-price__wrapper">
        <h5>Cart Total</h5>
        <ul className="output-price__list">
            <li><span>Tickets price :</span> <span>{ticketsPrice}</span></li>
            <li><span>Extra services price :</span> <span>{extraServicesPrice}</span></li>
            <li><span>Total price : </span> <span>{totalPrice}</span></li>
          </ul>  
      </div>
     {/*        <span className="output-price__item">
        {`Tickets price : ${ticketsPrice}`}
      </span> 
      <span className="output-price__item">
        {`Extra services price : ${extraServicesPrice}`}
      </span>
      <span className="output-price__item">
        {`Total price :  ${totalPrice}`}
      </span> */}
    </div>
  );
}

export default outputPrice;
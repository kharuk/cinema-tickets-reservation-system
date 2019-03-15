import React from 'react';
import './orderTable.scss'
import OrderItem from './OrderItem';

const OrderTable = (props) =>{

  return (
    <div className="order__container table-responsive-lg">
      <table className="order-table table  table-hover">
        <thead className="thead-dark order__table-head ">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Cinema</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Count</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem 
            filmName="How to get away with murder"
            city="Volkowysk"
            cinema="Berest'e"
            date="12/03/2019"
            time="15:00"
            countOfTickets="5"
            price="35"
          />
          <OrderItem 
            filmName="How to get away with murder"
            city="Volkowysk"
            cinema="Berest'e"
            date="12/03/2019"
            time="15:00"
            countOfTickets="5"
            price="35"
          />

        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
import React, {Fragment} from 'react';

const DisplayOrderInfo = (props) =>{

      
  return(
    <div className="order-info__container table-responsive col12 col-md-7">  
      <table className="order-info__table table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Cinema</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="order-info__film-name">
                <h6>Green book</h6>
            </td>
            <td className="order-info__city">
                <span>City</span>
            </td>
            <td className="order-info__cinema">
                <span>Cinema</span>
            </td>
            <td className="order-info__date">
                <span>24 march</span>
            </td>
            <td className="order-info__time">
                <span>18:00</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  );
}

export default DisplayOrderInfo;
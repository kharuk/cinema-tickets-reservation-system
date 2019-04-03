import { seatsSelectionTypes, orderTypes } from './types';
import orderActionHelpers from '../../helper/OrderActionHelpers';
import reservationServise from '../../services/ReservationServices';
import orderServices from '../../services/orderServices';
import { toastr } from 'react-redux-toastr';
import {store} from '../index';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};



  export const addOrder = (session, chosenSeats, chosenExtraServices) => async(dispatch) => {
    let info = orderActionHelpers.formOrder(session, chosenSeats, chosenExtraServices);
    console.log(info);
  try {
    let {data} = await orderServices.addOrder(info);
     if (data.isSuccessfully) {
    } 
  }  catch (err) {
    console.log(err);
    showErrorToast(err);
  }
}

export const fetchAllOrders = () => async(dispatch) => {
   try {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;
    let {data} = await orderServices.getOrderList(id);
    if (data.isSuccessfully) {
      let orders = orderActionHelpers.sortOrdersByDate(data.orderList);
      console.log(orders);
      dispatch({
        type: orderTypes.FETCH_ORDERS,
        payload: {
          orderList: data.orderList,
          currentOrders: orders.currentOrders,
          previousOrders: orders.previousOrders
        }
      });
    }
  } catch (err) {
    console.log(err);
    showErrorToast(err);
  } 
}

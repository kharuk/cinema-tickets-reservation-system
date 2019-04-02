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
     // console.log(data);
     /*  dispatch({
        type: orderTypes.ADD_ORDER,
        payload: {
          session: data.session[0]
        }
      }); */
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
      console.log(data);
      dispatch({
        type: orderTypes.FETCH_ORDERS,
        payload: {
          orderList: data.orderList
        }
      });
    }
  } catch (err) {
    console.log(err);
    showErrorToast(err);
  } 
}

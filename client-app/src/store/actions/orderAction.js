import { orderTypes } from './types';
import orderActionHelpers from '../../helper/OrderActionHelpers';
import orderServices from '../../services/orderServices';
import { toastr } from 'react-redux-toastr';
import {history} from '../index';
import {links} from '../../config/links';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};

export const addOrder = (session, chosenSeats, chosenExtraServices) => async(dispatch) => {
    let info = orderActionHelpers.formOrder(session, chosenSeats, chosenExtraServices);
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
    let {data} = await orderServices.getOrderList();
    if (data.isSuccessfully) {
      dispatch({
        type: orderTypes.FETCH_ORDERS,
        payload: { orderList: data.orderList }
      });
    }
  } catch (err) {
    console.log(err);
    showErrorToast(err);
    history.push(links.SIGN_IN_PAGE);
  } 
}

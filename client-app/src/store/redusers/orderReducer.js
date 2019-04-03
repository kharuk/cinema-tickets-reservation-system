import { orderTypes } from '../actions/types';
import moment from 'moment';

const initialState = {
};

export const orderReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case orderTypes.ADD_ORDER: {
      return {
        ...state,
        //session: data.session
      }
    }
    case orderTypes.FETCH_ORDERS: {
      return {
        ...state,
        orderList: data.orderList,
        currentOrders: data.currentOrders,
        previousOrders: data.previousOrders
      }
    }
    default:
      return state;
  }

}
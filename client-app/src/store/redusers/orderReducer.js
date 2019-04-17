import { orderTypes } from "../actions/types";

const initialState = {};

export const orderReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case orderTypes.ADD_ORDER: {
      return { ...state };
    }
    case orderTypes.FETCH_ORDERS: {
      return {
        ...state,
        orderList: data.orderList,
        currentOrders: data.currentOrders,
        previousOrders: data.previousOrders
      };
    }
    default:
      return state;
  }
};

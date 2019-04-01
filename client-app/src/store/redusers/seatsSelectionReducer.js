import { seatsSelectionTypes } from '../actions/types';
import moment from 'moment';

const initialState = {
};

export const seatsSelectionReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case seatsSelectionTypes.GET_SESSION_BY_ID: {
      return {
        ...state,
        session: data.session
      }
    }
    default:
      return state;
  }

}
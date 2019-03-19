import { userTypes } from '../actions/types';

const initialState = {
  userLocation: "Minsk"
};

export const userReducer = (state = initialState, action) => {
  let data = action.paylaod;
  switch (action.type) {
    case searchTypes.SET_LOCATION: {
      return {
        ...state,
        userLocation: data.userLocation
      }
    }
    default:
      return state;
  }

}
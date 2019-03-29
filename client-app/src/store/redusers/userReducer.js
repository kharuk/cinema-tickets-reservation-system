import { userTypes } from '../actions/types';

const initialState = {
  userLocation: "Minsk",
  user: JSON.parse(localStorage.getItem('user')) || null,
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case userTypes.SET_LOCATION: {
      return {
        ...state,
        userLocation: data.userLocation
      }
    }
    case userTypes.SIGN_IN_SUCCESS: {
      localStorage.setItem('user', JSON.stringify(data.user));
      return {
        ...state,
        user: data.user,
        loggedIn: true,
        errorMessage: undefined,
      }
    }
    case userTypes.SIGN_IN_FAILD: {
      return {
        ...state,
        loggedIn: false,
        errorMessage: data.message
      }
    }
    case userTypes.SIGN_UP_FAILD: {
      return {
        ...state,
        loggedIn: false,
        errorMessage: data.message
      }
    }
    case userTypes.LOGOUT_USER: {
      localStorage.removeItem('user');
      return {
        ...state,
        loggedIn: false,
        user: null
      }
    }
    default:
      return state;
  }

}
import { userTypes } from '../actions/types';

const initialState = {
  userLocation: "minsk",
  user: JSON.parse(localStorage.getItem('user')) || null,
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
        isLoggedIn: true,
        errorMessage: undefined,
      }
    }
    case userTypes.SIGN_IN_FAILD: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: data.message
      }
    }
    case userTypes.SIGN_UP_FAILD: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: data.message
      }
    }
    case userTypes.LOGOUT_USER: {
      localStorage.removeItem('user');
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    default:
      return state;
  }

}
import { userTypes } from '../actions/types';
import axios from 'axios';

const initialState = {
  userLocation: "Minsk",
  user: JSON.parse(localStorage.getItem('user')) || null,
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  let data = action.paylaod;
  switch (action.type) {
    case userTypes.SET_LOCATION: {
      return {
        ...state,
        userLocation: data.userLocation
      }
    }
    case userTypes.SIGN_IN_SUCCESS: {
      console.log('qwerty',data);
      localStorage.setItem('user', JSON.stringify(data.user));
      //axios.defaults.headers.common['Authorization'] = data.token;
      return {
        ...state,
        user: data.user,
        loggedIn: true,
        errorMessage: undefined,
        //token: data.token
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
     // delete axios.defaults.headers.common['Authorization'];
      console.log('remove');
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
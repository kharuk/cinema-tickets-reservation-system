import { userTypes } from '../actions/types';

const initialState = {
  userLocation: "Minsk",
  user: JSON.parse(localStorage.getItem('user')) || null,
  loggedIn: false
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
      return {
        ...state,
        user: data.user,
        loggingIn: true,
        errorMessage: undefined
      }
    }
    case userTypes.SIGN_IN_FAILD: {
      console.log('qwerty',data.message);
     // localStorage.setItem('user', JSON.stringify(data.user));
      return {
        ...state,
        loggingIn: false,
        errorMessage: data.message
      }
    }
    case userTypes.LOGOUT_USER: {
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
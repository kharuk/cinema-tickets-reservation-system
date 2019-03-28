import { toastr } from 'react-redux-toastr';
import { userTypes } from './types';
import userServices from '../../services/authServices';
import links from '../../config/links';

function setUserLocation(city) {
  return {
    type: userTypes.SET_LOCATION,
    payload: {
      userLocation: city
    }
  }
}

function signup(data) {
  return async (dispatch) => {
    try {
      await userServices.signup(data);
      //history.push(links.SIGN_IN_PAGE);
    } catch (err) {
      toastr.error(err);
    }
    
  }
} 

function login(values) {
  //console.log(data);
  return async (dispatch) => {
      try {
          const {data} = await userServices.login(values);
          console.log('data', data);
          if (data.isSuccessfully){
            console.log('user', data.user);
            dispatch({ 
              type: userTypes.SIGN_IN_SUCCESS, 
              paylaod: {
                user: data.user,
              }
            });
          } else {
            dispatch({ 
              type: userTypes.SIGN_IN_FAILD, 
              paylaod: {
                message: data.message
              }
            });
            //console.log(data.message);
          }
      } catch (err) {
        console.log(err);
       // console.log(data.message);
      //  toastr.error('ggg');
      }
  };
}

function logout() {
  return async (dispatch) => {
      try {
          await userServices.logout();
          dispatch({ type: userTypes.LOGOUT_USER });
      } catch (err) {
        toastr.error(err);
      }
  };
}


export const userActions = {
  setUserLocation,
  login,
  logout,
  signup
};
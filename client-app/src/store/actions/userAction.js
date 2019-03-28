import { toastr } from 'react-redux-toastr';
import { userTypes } from './types';
import userServices from '../../services/authServices';
import {links} from '../../config/links';
import {history} from '../index';

function setUserLocation(city) {
  return {
    type: userTypes.SET_LOCATION,
    payload: {
      userLocation: city
    }
  }
}

function signup(userInfo) {
  console.log(userInfo);
  return async (dispatch) => {
    try {
      const {data} = await userServices.signup(userInfo);
      if (data.isSuccessfully){
        dispatch(login({
          email: userInfo.email,
          password: userInfo.password
        }));
      } else {
        dispatch({ 
          type: userTypes.SIGN_UP_FAILD, 
          paylaod: {
            message: data.message
          }
        });
      }
    } catch (err) {
      console.log(err);
      //toastr.error(err);
    }
    
  }
} 

function login(values) {
  console.log(values);
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
                token: data.token
              }
            });
            history.push(links.FILM_SEARCH_PAGE);
          } else {
            dispatch({ 
              type: userTypes.SIGN_IN_FAILD, 
              paylaod: {
                message: data.message
              }
            });
          }
      } catch (err) {
        console.log(err);
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
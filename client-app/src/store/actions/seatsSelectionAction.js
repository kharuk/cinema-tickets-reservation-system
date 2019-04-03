import { seatsSelectionTypes } from './types';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';
import sessionServices from '../../services/sessionServices';
import { toastr } from 'react-redux-toastr';
import {store} from '../index';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};



export const getSessionById = (id) => async(dispatch) => {
  try {
    let {data} = await sessionServices.getSessionById(id);
    if (data.isSuccessfully) {
      console.log(data);
      dispatch({
        type: seatsSelectionTypes.GET_SESSION_BY_ID,
        payload: {
          session: data.session[0]
        }
      });
    }
  }  catch (err) {
    console.log(err);
    showErrorToast(err);
  }

}
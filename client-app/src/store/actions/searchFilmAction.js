import { searchTypes } from './types';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';
import sessionServices from '../../services/sessionServices';
import { toastr } from 'react-redux-toastr';
import {store} from '../index';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};

export const setCurrentCity = (city) => {
  return {
    type: searchTypes.SET_CURRENT_CITY,
    payload: {
      selectedCity: city
    }
  }
}

export const setCurrentFilmName = (filmName) => {
  return {
    type: searchTypes.SET_CURRENT_FILM_NAME,
    payload: {
      filmName: filmName
    }
  }
}

export const setCurrentCinema = (cinema) => {
  return {
    type: searchTypes.SET_CURRENT_CINEMA,
    payload: {
      cinema: cinema
    }
  }
}

export const setSessionDate = (date) => {
  return {
    type: searchTypes.SET_SESSION_DATE,
    payload: {
      sesionDate: date
    }
  }
}

export const getFiltredFilmList = (sessions, filmName, cinema, city, date) => async (dispatch) => {
    const filters = {
      filmName, cinema, city, date
    }
    try{
      let filtredData = searchFilmActionHelpers.getFilteredData(filters, sessions);
      dispatch({
        type: searchTypes.GET_FILTRED_FILM_LIST,
        payload: {
          filtredData: filtredData
        }
      });
    } catch(err) {
      console.log(err);
      showErrorToast(err);
    } 
}

export const fetchFilms = (city, date) => async(dispatch) => {
  try {
    let {data} = await sessionServices.getSessionList();
    if (data.isSuccessfully){
      const filters = {
        city, date
      }
      let filtredData = searchFilmActionHelpers.getFilteredData(filters, data.sessions);
      console.log(filtredData)
      dispatch({
        type: searchTypes.FETCH_FILMS,
        payload: {
          films: data.sessions,
          filtredData: filtredData
        }
      });
    }
  } catch (err) {
    console.log(err);
    showErrorToast(err);
  }
  
}

export const getFilmById = (id) => async(dispatch) => {
  try {

    //choseen film id
    let {data} = await sessionServices.getFilmById(id);
    if (data.isSuccessfully) {
      console.log(data);
      const infoFromStore = store.getState().search
      const filters = {
        city: infoFromStore.selectedCity,
        cinema: infoFromStore.cinema, 
        filmName: infoFromStore.filmName, 
        date: infoFromStore.sessionDate
      }
      let filtredData = searchFilmActionHelpers.getFilteredData(filters, [data.session]); //filmwithFiltredSesison
      console.log(filtredData[0]);
      dispatch({
        type: searchTypes.GET_FILM_BY_ID,
        payload: {
          film: filtredData[0]
        }
      });
    }
  }  catch (err) {
    console.log(err);
    showErrorToast(err);
  }
}

export const searchFilmActions = {
  setCurrentCity
};
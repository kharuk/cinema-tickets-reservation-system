import { searchTypes } from './types';
import sessionServices from '../../services/sessionServices';
import { toastr } from 'react-redux-toastr';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};

export const setCurrentCity = (city) => {
  return {
    type: searchTypes.SET_CURRENT_CITY,
    payload: { selectedCity: city }
  }
}

export const setCurrentFilmName = (filmName) => {
  return {
    type: searchTypes.SET_CURRENT_FILM_NAME,
    payload: { filmName: filmName }
  }
}

export const setCurrentCinema = (cinema) => {
  return {
    type: searchTypes.SET_CURRENT_CINEMA,
    payload: { cinema: cinema }
  }
}

export const setSessionDate = (date) => {
  return {
    type: searchTypes.SET_SESSION_DATE,
    payload: { sesionDate: date }
  }
}

export const setCountOfSeats = (countOfSeats) => {
  return {
    type: searchTypes.SET_COUNT_OF_SEATS,
    payload: { countOfSeats: countOfSeats }
  }
}

export const fetchFilms = () => async(dispatch) => {
  try {
    let {data} = await sessionServices.getSessionList();
    if (data.isSuccessfully){
      const {filmList, cinemaList} = searchFilmActionHelpers.getFilmAndCinemaList(data.sessions);
      dispatch({
        type: searchTypes.FETCH_FILMS,
        payload: { 
          films: data.sessions,
          filmList: filmList,
          cinemaList: cinemaList
        }
      });
    }
  } catch (err) {
    console.log(err);
    showErrorToast(err);
  }
}

export const setChosenFilm = (id) => {
  return {
    type: searchTypes.SET_CHOSEN_FILM_ID,
    payload: { chosenFilm: id }
  }
}

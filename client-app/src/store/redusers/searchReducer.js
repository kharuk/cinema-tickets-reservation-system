import { searchTypes } from '../actions/types';
import moment from 'moment';

const initialState = {
  selectedCity:'minsk',
  filmName: undefined,
  cinema: undefined,
  sessionDate: moment(),
  films: undefined,
  choosenFilm: undefined
};

export const searchReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case searchTypes.SET_CURRENT_CITY: {
      return {
        ...state,
        selectedCity: data.selectedCity
      }
    }
    case searchTypes.SET_CURRENT_FILM_NAME: {
      return {
        ...state,
        filmName: data.filmName
      }
    }
    case searchTypes.SET_CURRENT_CINEMA: {
      return {
        ...state,
        cinema: data.cinema
      }
    }
    case searchTypes.SET_SESSION_DATE: {
      return {
        ...state,
        sessionDate: data.sesionDate
      }
    }
    case searchTypes.FETCH_FILMS: {
      return {
        ...state,
        films: data.films,
        filtredData: data.filtredData
      }
    }
    case searchTypes.GET_FILTRED_FILM_LIST: {
      return {
        ...state,
        filtredData: data.filtredData
      }
    }
    case searchTypes.GET_FILM_BY_ID: {
      return {
        ...state,
        choosenFilm: data.film
      }
    }
    default:
      return state;
  }

}
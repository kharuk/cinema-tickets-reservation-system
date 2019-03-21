import { searchTypes } from '../actions/types';

const initialState = {
  selectedCity:'Minsk',
  filmName: undefined,
  cinema: undefined,
  sessionDate: new Date(),
  films: undefined

};

export const searchReducer = (state = initialState, action) => {
 // 
  let data = action.payload;
  //console.log(data);
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
        films: data.films
      }
    }
    case searchTypes.GET_FILTRED_FILM_LIST: {
      return {
        ...state,
        films: data.films
      }
    }
    default:
      return state;
  }

}
import { searchTypes } from './types';
import { filmsRef } from "../../services/firebase/initFirebase";

function setCurrentCity(city) {
  const setRequest = (city) => {
    return {
      type: searchTypes.SET_CURRENT_CITY,
      payload: {
        selectedCity: city
      }
    }
  };

  return dispatch => {
    dispatch(setRequest(city));
  }

}

export const fetchFilms = () => async dispatch => {
  filmsRef.on("value", snapshot => {
    dispatch({
      type: searchTypes.FETCH_FILMS,
      payload: {
        films: snapshot.val()
      }
    });
  });
};



export const searchFilmActions = {
  setCurrentCity
};
import { searchTypes } from './types';

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

export const searchFilmActions = {
  setCurrentCity
};
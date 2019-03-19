import { userTypes } from './types';

function setUserLocation(city) {
  const setRequest = (city) => {
    return {
      type: userTypes.SET_LOCATION,
      payload: {
        userLocation: city
      }
    }
  };

  return dispatch => {
    dispatch(setRequest(city));
  }

}

export const searchFilmActions = {
  setUserLocation
};
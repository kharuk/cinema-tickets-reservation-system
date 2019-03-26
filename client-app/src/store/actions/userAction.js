import { userTypes } from './types';

function setUserLocation(city) {
  return {
    type: userTypes.SET_LOCATION,
    payload: {
      userLocation: city
    }
  }
}

export const searchFilmActions = {
  setUserLocation
};
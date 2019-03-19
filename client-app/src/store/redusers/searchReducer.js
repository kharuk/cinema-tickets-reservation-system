import { searchTypes } from '../actions/types';

const initialState = {
  selectedCity: null
};

export const searchReducer = (state = initialState, action) => {
  let data = action.paylaod;
  switch (action.type) {
    case searchTypes.SET_CURRENT_CITY: {
      return {
        ...state,
        selectedCity: data.selectedCity
      }
    }
    case searchTypes.FETCH_FILMS: {
      return {
        ...state,
        films: data.films
      }
    }
    default:
      return state;
  }

}
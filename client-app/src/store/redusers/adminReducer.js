

import { adminTypes } from '../actions/types';

const initialState = {
};

export const adminReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case adminTypes.RESET_FILM_INFO: {
      return initialState;
    }
  default:
    return state;
  }
};

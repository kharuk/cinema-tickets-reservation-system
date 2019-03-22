import { searchTypes } from './types';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';
//import { databaseRef } from "../../services/firebase/initFirebase";

export const setCurrentCity = (city) => {
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

export const setCurrentFilmName = (filmName) => {
  const setRequest = (filmName) => {
    return {
      type: searchTypes.SET_CURRENT_FILM_NAME,
      payload: {
        filmName: filmName
      }
    }
  };

  return dispatch => {
    dispatch(setRequest(filmName));
  }
}

export const setCurrentCinema = (cinema) => {
  const setRequest = (cinema) => {
    return {
      type: searchTypes.SET_CURRENT_CINEMA,
      payload: {
        cinema: cinema
      }
    }
  };

  return dispatch => {
    dispatch(setRequest(cinema));
  }
}

export const setSessionDate = (date) => {
  const setRequest = (date) => {
    return {
      type: searchTypes.SET_SESSION_DATE,
      payload: {
        sesionDate: date
      }
    }
  };

  return dispatch => {
    dispatch(setRequest(date));
  }
}


export const getFiltredFilmList = (filmName, cinema, city, date) => {
  const setRequest = (filtredFilmList) => {
    return {
      type: searchTypes.GET_FILTRED_FILM_LIST,
      payload: {
        films: filtredFilmList
      }
    }
  };

  return (dispatch, getState, {getFirestore}) => {
    const filters = {
      filmName, cinema, city, date
    }
    const firestore = getFirestore();
    const filmListRef = firestore.collection('films');
    const query = searchFilmActionHelpers.getFilteredData(filters, filmListRef);

    query.get()
    .then( querySnapshot => {
      console.log('some data', querySnapshot)
      let filtredFilmList = {};
      querySnapshot.forEach( doc => {
        filtredFilmList[doc.id] = doc.data();
      });
      filtredFilmList = searchFilmActionHelpers.filterData(filtredFilmList, filters.date);
      dispatch(setRequest(filtredFilmList));
    })
    .catch( error => {
        console.log("Error getting documents: ", error);
    });
  }
}



export const fetchFilms = (city) => (dispatch, getState, {getFirestore}) => {

  const firestore = getFirestore();
  firestore.collection('films').where("city", "==", city.toLowerCase()).get()
  .then( querySnapshot => {
    let filmList = {};
    querySnapshot.forEach( doc => {
        filmList[doc.id] = doc.data();
    });
    dispatch({
      type: searchTypes.FETCH_FILMS,
      payload: {
        films: filmList
      }
    });
  })
  .catch( error => {
      console.log("Error getting documents: ", error);
  });
  /* .then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    }); */
  
};





export const searchFilmActions = {
  setCurrentCity
};
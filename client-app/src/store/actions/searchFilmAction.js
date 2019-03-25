import { searchTypes } from './types';
import searchFilmActionHelpers from '../../helper/SearchFilmActionHelpers';
//import { databaseRef } from "../../services/firebase/initFirebase";

/* export const setCurrentCity = (city) => {
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
 */

export const setCurrentCity = (city) => {
  return {
    type: searchTypes.SET_CURRENT_CITY,
    payload: {
      selectedCity: city
    }
  }
}

export const setCurrentFilmName = (filmName) => {
  return {
    type: searchTypes.SET_CURRENT_FILM_NAME,
    payload: {
      filmName: filmName
    }
  }
}

export const setCurrentCinema = (cinema) => {
  return {
    type: searchTypes.SET_CURRENT_CINEMA,
    payload: {
      cinema: cinema
    }
  }
}

export const setSessionDate = (date) => {
  return {
    type: searchTypes.SET_SESSION_DATE,
    payload: {
      sesionDate: date
    }
  }
}


export const getFiltredFilmList = (filmName, cinema, city, date) => {
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
      filtredFilmList = searchFilmActionHelpers.filterByDate(filtredFilmList, filters.date);
      dispatch({
        type: searchTypes.GET_FILTRED_FILM_LIST,
        payload: {
          films: filtredFilmList
        }
      });
    })
    .catch( error => {
        console.log("Error getting documents: ", error);
    });
  }
}



export const fetchFilms = (city, date) => (dispatch, getState, {getFirestore}) => {

  const firestore = getFirestore();
  firestore.collection('films').where("city", "==", city.toLowerCase()).get()
  .then( querySnapshot => {
    let filmList = {};
    querySnapshot.forEach( doc => {
        filmList[doc.id] = doc.data();
    });
    filmList = searchFilmActionHelpers.filterByDate(filmList, date);
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
};

export const getFilmById = (id) => (dispatch, getState, {getFirestore}) => {

/*   const firestore = getFirestore();
  firestore.collection('films').doc(id).get()
  .then(doc => {
    dispatch({
      type: searchTypes.GET_FILM_BY_ID,
      payload: {
        film: doc.data()
      }
    })
  }) */

  const firestore = getFirestore();
  firestore.collection('films').doc(id).collection('film').get()
  .then(querySnapshot => {
    let filmList = {};
    querySnapshot.forEach( doc => {
        filmList = doc.data();
    });
    dispatch({
      type: searchTypes.GET_FILM_BY_ID,
      payload: {
        film: filmList
      }
    });
  });
}





export const searchFilmActions = {
  setCurrentCity
};
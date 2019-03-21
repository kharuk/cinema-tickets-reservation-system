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


const getFilteredRestaurants = (filters, filmListRef) => {
  let queryFilmName = filmListRef;
  let queryCinema = filmListRef;
  let queryCity = filmListRef;

  if (filters.filmName) {
    filters.filmName = filters.filmName.toLowerCase();
    let nextLetterInFilm = searchFilmActionHelpers.getNextLetter(filters.filmName);
    queryFilmName = queryFilmName.where('name', '>=', filters.filmName).where('name', '<=', nextLetterInFilm); 
  }

  if (filters.cinema) {
    filters.cinema = filters.cinema.toLowerCase();
    let nextLetterInCinema = searchFilmActionHelpers.getNextLetter(filters.cinema);
    queryCinema = queryCinema.where('cinema', '>=', filters.cinema).where('cinema', '<=', nextLetterInCinema); 
  }


  if (filters.city) {
    filters.city = filters.city.toLowerCase();
    let nextLetterInCity = searchFilmActionHelpers.getNextLetter(filters.city);
    queryCity = queryCity.where('city', '>=', filters.city).where('city', '<=', nextLetterInCity); 
  }
  //console.log('query ', query);
  // add  filter for date
  return {queryFilmName, queryCinema, queryCity };
};

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

/*     const filters = {
      filmName, cinema, city, date
    } */

   // let nextLetter = searchFilmActionHelpers.getNextLetter(filmName);

    const firestore = getFirestore();
    const filmListRef = firestore.collection('films');

    const changedCity = city.toLowerCase();
    const query = filmListRef.where('city', '==', changedCity);

  //  const queryByFilmName = filmName ? filmList.where('name', '>=', filmName).where('name', '<=', nextLetter) : filmList;
 //   const query = filmName ? filmList.where("name", "==", filmName) : filmList;  

    query.get()
    .then( querySnapshot => {
      console.log('some data', querySnapshot)
      let filtredFilmList = {};
      querySnapshot.forEach( doc => {
        filtredFilmList[doc.id] = doc.data();
      });


      dispatch(setRequest(filtredFilmList));
    })
    .catch( error => {
        console.log("Error getting documents: ", error);
    });
  }
}



export const fetchFilms = () => (dispatch, getState, {getFirestore}) => {

  
  const firestore = getFirestore();
  firestore.collection('films').get()
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
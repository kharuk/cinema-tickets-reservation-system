import { searchTypes } from './types';
//import { databaseRef } from "../../services/firebase/initFirebase";

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

export const fetchFilms = () => (dispatch, getState, {getFirestore}) => {
//  debugger;
/*   dispatch({
    type: searchTypes.FETCH_FILMS,
    payload: {
      films: {name: "qwerty"}
    }
  }); */
  /* debugger;
  databaseRef.ref('/films').set({
    description: "bad film",
    name: "green book2",
    poster_file: "qwerty.jpg"

  }); */
  /* databaseRef.ref('/films/Kw5XCmusStrAMIkgwPN9').on("value", snapshot => {
    dispatch({
      type: searchTypes.FETCH_FILMS,
      payload: {
        films: snapshot.val()
      }
    });
  }); */
  
  const firestore = getFirestore();
    firestore.collection('films').get()
    .then(function(querySnapshot) {
      let filmArray = [];
        querySnapshot.forEach(function(doc) {
            filmArray.push(doc.data());
        });
        dispatch({
          type: searchTypes.FETCH_FILMS,
          payload: {
            films: filmArray
          }
        });
    })
    .catch(function(error) {
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
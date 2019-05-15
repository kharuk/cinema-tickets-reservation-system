import _ from 'lodash';
import { toastr } from 'react-redux-toastr';
import { adminTypes } from './types';
import adminServices from '../../services/adminSevices';
import { links } from '../../config/links';
import { history } from '../index';

const showErrorToast = (err) => {
  const message = err.response && err.response.data.error ? err.response.data.error.message : `${err}`;
  toastr.error(message);
};

const showSuccessToast = (message) => {
  toastr.success(message);
};

export const addFilmInfo = (film) => async (dispatch) => {
  try {
    let image = film.photo[0];
    let formData = new FormData();
    formData.append('FilmPoster', image);     
    const {
        data: { imagePath },
    } = await adminServices.saveImages(formData);

    const newFilm = {
        ...film,
        imagePath: imagePath.src
    };

    const response = await adminServices.addFilm(newFilm);

    dispatch({
      type: adminTypes.ADD_FILM,
      payload: {
        film: response.result,
      },
    });
    showSuccessToast('Film created!');
    dispatch({
        type: adminTypes.RESET_FILM_INFO,
    });
 
    history.push(links.MANAGE_MOVIES);
  } catch (err) {
      showErrorToast(err);
  }
}

export const removeItem = (id) => async (dispatch) => {
  try {

    console.log('qwerty');
    const response = await adminServices.removeFilm(id);
    console.log(response);
    if (response.data.isSuccessfully) {
      showSuccessToast('Film deleted!'); 
    }
/*     dispatch({
      type: adminTypes.DELETE_FILM,
      payload: {
        film: response.result,
      },
    }); */
  
    history.push(links.MANAGE_MOVIES);
  } catch (err) {
      showErrorToast(err);
  }

}

export const updateItem = (id, film) => async (dispatch) => {
  try {
    console.log(id, film);
    /* let image = film.photo[0];
    let formData = new FormData();
    formData.append('FilmPoster', image);     
    const {
        data: { imagePath },
    } = await adminServices.saveImages(formData);

    const newFilm = {
        ...film,
        imagePath: imagePath.src
    }; */
    console.log(film);
    film.imagePath=film.photo
    console.log('qwerty');
    const response = await adminServices.updateFilm(id, film);
    console.log(response);
    if (response.data.isSuccessfully) {
      showSuccessToast('Film updated!'); 
    }
    dispatch({
      type: adminTypes.RESET_FILM_INFO,
    });
/*     dispatch({
      type: adminTypes.DELETE_FILM,
      payload: {
        film: response.result,
      },
    }); */
  
    history.push(links.MANAGE_MOVIES);
  } catch (err) {
      showErrorToast(err);
  }

}


export const fetchFilm = (id) => async (dispatch) => {
  try {
    console.log('qwerty');
    const response = await adminServices.getFilm(id);
    console.log(response);
    if (response.data.isSuccessfully) {
     dispatch({
      type: adminTypes.FETCH_FILM_BY_ID,
      payload: {
        film: response.data.result,
      },
    }); 
  }
   // history.push(links.MANAGE_MOVIES);
  } catch (err) {
      showErrorToast(err);
  }

}

/* export const userActions = {
  addFilmInfo,
  removeItem
}; */

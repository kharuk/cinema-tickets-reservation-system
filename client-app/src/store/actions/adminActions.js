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

export const userActions = {
  addFilmInfo,

};

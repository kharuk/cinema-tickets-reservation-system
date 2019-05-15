import axios from 'axios';

function addToken() {
  const token = JSON.parse(localStorage.getItem('token')) || null;
  return {
    headers: {
      Authorization: token,
    },
  };
}

function addFilm(filmInfo) {
  const options = addToken();
  // eslint-disable-next-line no-underscore-dangle
  return axios.post('http://localhost:8080/api/films', { ...filmInfo }, options);
}

function saveImages(formData) {
  console.log('formData', formData);
  return axios.post('http://localhost:8080/api/images', formData, {
 /*      headers: {
          'Content-Type': 'multipart/form-data',
      }, */
  });
}

function removeFilm(id) {
  const options = addToken();
  // eslint-disable-next-line no-underscore-dangle
  return axios.delete(`http://localhost:8080/api/films/${id}`, options);
}

function updateFilm(id, data) {
  const options = addToken();
  // eslint-disable-next-line no-underscore-dangle
  return axios.put(`http://localhost:8080/api/films/${id}`, { ...data }, options);
}

function getFilm(id) {
  const options = addToken();
  // eslint-disable-next-line no-underscore-dangle
  return axios.get(`http://localhost:8080/api/films/${id}`, options);
}

export default {
  addFilm,
  saveImages,
  removeFilm,
  updateFilm,
  getFilm
};
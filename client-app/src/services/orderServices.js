import axios from 'axios';

function getOrderList(id) {
    return axios.get('http://localhost:8080/api/orders', { 
      withCredentials: true, 
      headers: {
        id
      } 
    });
}

function addOrder(data) {
  console.log(data);
  return axios.post('http://localhost:8080/api/orders', data, { withCredentials: true });
}

/* function getFilmById(id) {
  return axios.get(`http://localhost:8080/api/films/${id}`, { withCredentials: true });
}

function getSessionById(id) {
  return axios.get(`http://localhost:8080/api/sessions/${id}`, { withCredentials: true });
} */

export default {
  getOrderList,
  addOrder
};
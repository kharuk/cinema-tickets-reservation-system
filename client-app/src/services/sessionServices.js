import axios from 'axios';

function getSessionList() {
    return axios.get('http://localhost:8080/api/sessions', { withCredentials: true });
}

function getSessionById(id) {
  return axios.get(`http://localhost:8080/api/sessions/${id}`, { withCredentials: true });
}

export default {
  getSessionList,
  getSessionById
};
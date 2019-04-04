import axios from 'axios';

function addToken() {
  const token = JSON.parse(localStorage.getItem('token')) || null
  return {
    headers: {
      'Authorization': token
    }
  }
}

function getOrderList() {
  const options = addToken();
  return axios.get('http://localhost:8080/api/orders', options, { withCredentials: true});
}

function addOrder(data) {
  return axios.post('http://localhost:8080/api/orders', data, { withCredentials: true });
}


export default {
  getOrderList,
  addOrder
};
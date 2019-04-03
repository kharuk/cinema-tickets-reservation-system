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


export default {
  getOrderList,
  addOrder
};
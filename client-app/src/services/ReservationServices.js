import axios from 'axios';

function addToken() {
  const token = JSON.parse(localStorage.getItem('token')) || null
  return {
    headers: {
      'Authorization': token
    }
  }
}

function updateSeat(sessionId, seatInfo) {
  const options = addToken();
  return axios.put(`http://localhost:8080/api/sessions/${sessionId}/seats/${seatInfo._id}`, seatInfo, options, { withCredentials: true});
}


export default {
  updateSeat,
};
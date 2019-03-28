import axios from 'axios';

function signup(data) {
    return axios.post('http://localhost:8080/api/signup', data);
}

function login(data) {
    return axios.post('http://localhost:8080/api/login', data);
}

function logout() {
    return axios.get('http://localhost:8080/api/logout');
}

export default {
    signup,
    login,
    logout,
};

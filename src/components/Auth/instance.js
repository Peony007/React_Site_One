import axios from 'axios';

const instance = (token) =>
  axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: { authorization: 'Bearer ' + token },
  });
export default instance;

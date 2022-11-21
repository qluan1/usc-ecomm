import axios from 'axios';

const url = 'http://localhost:3500/refresh';
function refreshToken() {
  return axios.get(url, {
    withCredentials: true
  });
};

export default refreshToken;

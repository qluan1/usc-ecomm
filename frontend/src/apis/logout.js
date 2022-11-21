import axios from 'axios';

const url = 'http://localhost:3500/logout';
function logout() {
  return axios(url, {
    method: 'POST',
    mode: 'cors',
    withCredentials: true
  });
};

// function logout() {
//   return fetch(url, {
//     mode: 'cors',
//     method: 'POST',
//     credentials: 'include'
//   });
// }

export default logout;
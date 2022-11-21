import axios from 'axios';

const URL = 'http://localhost:3500/register'

function register(username, password) {
  return axios.post(URL, {
    username,
    password
  });
}

export {register};

// headers: {
//   'Access-Control-Allow-Origin' : '*',
//   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
// },
import axios from 'axios';

const URL = 'http://localhost:3500/login';

function login(username, password) {
  // const form = new FormData();
  // form.append('username', username);
  // form.append('password', password);
  return axios({
    method: 'POST',
    url: URL,
    headers: {'Content-Type': 'application/json'},
    data: {username, password},
    withCredentials: true
  });
}

export { login };
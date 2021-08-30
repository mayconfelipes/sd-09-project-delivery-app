import axios from 'axios';

const headers = require('./setUpFetch.json');

const URL = 'http://localhost:3001/';

export const api = axios.create(
  { baseURL: URL },
  { headers },
);

export const loginApi = (stringUser) => {
  api.defaults.headers.authorizarion = stringUser;

  const token = api.get(`${URL}login`, json)
    .then((response) => response)
    .catch((err) => console.log(err));
  return token;
};

export const registerUserApi = (data) => {
  api.post('/register', { ...data })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};

import axios from 'axios';

const headers = require('./setUpFetch.json');

const URL = 'http://localhost:3001/';

export const api = axios.create(
  { baseURL: URL },
  { headers },
);

export const loginApi = (stringUser) => {
  api.defaults.headers.authorizarion = stringUser;

  const token = api.post(`${URL}login`)
    .then((response) => response)
    .catch((err) => console.log(err));
  return token;
};

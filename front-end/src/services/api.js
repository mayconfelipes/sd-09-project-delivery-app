import axios from 'axios';

const headers = require('./setUpFetch.json');

const URL = 'http://localhost:3001/';

const api = axios.create(
  { baseURL: URL },
  { headers },
);

export const loginApi = (stringUser) => {
  api.defaults.headers.authorizarion = stringUser;

  const token = api.get(`${URL}login`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  return token;
};

export const registerUserApi = (data) => {
  const token = api.post(`${URL}register`, { ...data })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  return token;
};

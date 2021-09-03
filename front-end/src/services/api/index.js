import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const requestApi = async ({ method, endpoint, data = {}, token }) => {
  if (token) api.defaults.headers.authorization = token;
  return api[method](endpoint, data)
    .then((response) => response)
    .catch((error) => error.response);
};

export default requestApi;

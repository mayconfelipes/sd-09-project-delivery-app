import axios from 'axios';

function getApiClient() {
  const { token } = JSON.parse(localStorage.getItem('user'));

  const api = axios.create({
    baseURL: 'http://localhost:3001',
  });

  if (token) {
    api.defaults.headers.Authorization = token;
  }

  return api;
}

export default getApiClient;

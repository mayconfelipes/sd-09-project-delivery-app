import axios from 'axios';

const headers = require('./setUpFetch.json');

const URL = 'http://localhost:3001/';

const Api = axios.create(
  { baseURL: URL },
  { headers },
);

export default Api;

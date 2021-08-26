import axios from 'axios';

const connectBack = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default connectBack;

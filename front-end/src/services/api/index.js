import axios from 'axios';

const requestApi = async ({ method, endpoint, data }) => {
  try {
    const url = `http://localhost:3001/${endpoint}`;
    const response = await axios[method](url, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export default requestApi;

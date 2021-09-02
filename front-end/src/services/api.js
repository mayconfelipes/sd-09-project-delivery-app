import axios from 'axios';

const url = 'http://localhost:3001';
const token = { headers: { authorization: JSON.parse(localStorage.user).token } };

export const login = async (email, password, successCb, errorCb) => {
  const body = { email, password };
  try {
    const { data } = await axios.post(`${url}/login`, body);
    errorCb('');
    successCb(data);
    return data;
  } catch (error) {
    const { data } = error.response;
    successCb('');
    errorCb(data);
    return data;
  }
};

export const createUser = (body) => axios.post(`${url}/user`, body)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

export const getProducts = () => axios.get(`${url}/product`)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

export const getSalesBySeller = (id) => axios.get(`${url}/sale/seller/${id}`, token)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

export const getSale = (id) => axios.get(`${url}/sale/${id}`, token)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

export const createSale = (body) => axios.post(`${url}/sale`, body, token)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

export const getUsers = () => axios.get(`${url}/user`)
  .then(({ data }) => data)
  .catch((error) => error.response.data);

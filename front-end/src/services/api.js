import axios from 'axios';

const url = 'http://localhost:3001';

const token = () => ({ headers: { authorization: JSON.parse(localStorage.user).token } });

// { ::: USERS ::: }

export const login = async (body) => axios.post(`${url}/login`, body)
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const registerUser = (body) => axios.post(`${url}/user/register`, body)
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const createUser = (body) => axios.post(`${url}/user`, body, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const getUsers = () => axios.get(`${url}/user`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const getUserById = (id) => axios.get(`${url}/user/${id}`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const deleteUser = (id) => axios.delete(`${url}/user/${id}`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

// { ::: SALES ::: }

export const createSale = (body) => axios.post(`${url}/sale`, body, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const getSales = () => axios.get(`${url}/sale`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const getSaleById = (id) => axios.get(`${url}/sale/${id}`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

export const updateSale = (id, body) => axios.put(`${url}/sale/${id}`, body, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

// { ::: PRODUCTS ::: }

export const getProducts = () => axios.get(`${url}/product`, token())
  .then(({ data }) => (data))
  .catch((e) => ({ error: e.response.data }));

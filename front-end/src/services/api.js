import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const registerUser = async (name, email, password) => {
  const newUser = await axios
    .post(`${baseURL}/register`, {
      name,
      email,
      password,
    });
  return newUser;
};

export const registerUserByAdmin = async (userObject, token) => {
  const newUser = await axios
    .post(`${baseURL}/register/admin`, userObject, { headers: { Authorization: token } });
  return newUser;
};

export const loginUser = async (email, password) => {
  const loggedUser = await axios
    .post(`${baseURL}/login`, {
      email,
      password,
    });
  return loggedUser;
};

// export const getOrders = async () => {
//   const orders = await axios
//     .get('/customer/orders');
//   return orders;
// };

export const getProducts = async () => {
  const { data } = await axios
    .get(`${baseURL}/products`);
  return data;
};

export const getSellers = async () => {
  const { data } = await axios
    .get(`${baseURL}/sellers`);
  return data;
};

export const postNewOrder = async (orderObj, token) => {
  const { data } = await axios
    .post(`${baseURL}/orders`, orderObj, { headers: { Authorization: token } });
  return data;
};

export const getOrders = async (token) => {
  const { data } = await axios
    .get(`${baseURL}/orders`, { headers: { Authorization: token } });
  return data;
};

export const getSales = async (token) => {
  const { data } = await axios
    .get(`${baseURL}/sales`, { headers: { Authorization: token } });
  return data;
};

export const getOrderById = async (orderId, token) => {
  const { data } = await axios
    .get(`${baseURL}/orders/${orderId}`, { headers: { Authorization: token } });
  return data;
};

export const updateOrder = async (orderId, status, token) => {
  const headers = { headers: { Authorization: token } };
  const { data } = await axios
    .put(`${baseURL}/orders/${orderId}`, { status }, headers);
  return data;
};

export const updateSale = async (orderId, status, token) => {
  const headers = { headers: { Authorization: token } };
  const { data } = await axios
    .put(`${baseURL}/sales/${orderId}`, { status }, headers);
  return data;
};

const CONTENT = 'application/json';
const URL = 'http://localhost:3001';

const loginUser = (user) => {
  const endpoint = `${URL}/users/login`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const registerUser = (newUser) => {
  const endpoint = `${URL}/users/register`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ ...newUser }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const registerUserWithAdmin = (newUser, token) => {
  const endpoint = `${URL}/admin/register`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
      authorization: token,
    },
    body: JSON.stringify({ ...newUser }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const getAllProducts = (token) => {
  const endpoint = `${URL}/customer/products`;
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': CONTENT,
      authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const saveOrder = (orderData) => {
  const endpoint = `${URL}/customer/checkout`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
      authorization: token,
    },
    body: JSON.stringify({ orderData }),
  })
    .then((response) => response.json())
    .then((data) => data) // conferir
    .catch((err) => err);
};

export default {
  loginUser,
  registerUser,
  registerUserWithAdmin,
  getAllProducts,
  saveOrder,
};

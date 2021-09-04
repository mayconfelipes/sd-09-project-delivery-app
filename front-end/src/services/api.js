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
  console.log(endpoint);
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

// pega uma venda do database
const getSaleById = (id) => {
  const endpoint = `${URL}/sales/${id}`;
  return fetch(endpoint, {
    headers: {
      'Content-Type': CONTENT,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

// dado um id pega todos os items de uma venda pelo id da venda
const getSaleItems = (id) => {
  const endpoint = `${URL}/sales/items/${id}`;

  return fetch(endpoint, {
    headers: {
      'Content-Type': CONTENT,
    },
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

// checkout feature
const saveOrder = (orderData, listItens, token) => {
  const endpoint = `${URL}/customer/checkout`;
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': CONTENT,
      authorization: token,
    },
    body: JSON.stringify({ orderData, listItens }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

// main-group-3
const getAllSales = (token) => {
  const endpoint = `${URL}/sales`;
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

// pega id e name de todos vendedores
const getAllVendors = (token) => {
  const endpoint = `${URL}/vendors`;
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

const getAllUsers = () => {
  const endpoint = `${URL}/users/`;
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': CONTENT,
      // authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const removeUserById = (id) => {
  const endpoint = `${URL}/users/`;
  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ userId: id }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

const changeOrderStatus = (id, status) => {
  const endpoint = `${URL}/sales/${id}`;
  return fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': CONTENT,
    },
    body: JSON.stringify({ status }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export default {
  loginUser,
  registerUser,
  registerUserWithAdmin,
  getSaleById,
  getSaleItems,
  getAllProducts,
  saveOrder,
  getAllSales,
  getAllVendors,
  getAllUsers,
  removeUserById,
  changeOrderStatus,
};

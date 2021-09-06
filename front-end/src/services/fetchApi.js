const URL = 'http://localhost:3001/';

export const getProducts = (token) => fetch(`${URL}products`, {
  headers: {
    Authorization: token,
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log(err));

export const getAllSellers = (token) => fetch(`${URL}allsellers`, {
  headers: {
    Authorization: token,
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log(err));

export const sendOrder = (token, order) => fetch(`${URL}customer/checkout`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
  body: JSON.stringify({ ...order }),
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log(err));

export const registerUserByAdmin = async (token, userInfo) => {
  const code = await fetch(`${URL}admin/register-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ ...userInfo }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  return code;
};

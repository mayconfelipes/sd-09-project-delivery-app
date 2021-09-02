const URL = 'http://localhost:3001/';

export const getProducts = (token) => fetch(`${URL}products`, {
  headers: {
    Authorization: token,
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log(err));

export const login = ({ email, password }) => fetch(`${URL}login`, {
  body: {
    email,
    password,
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => console.log(err));

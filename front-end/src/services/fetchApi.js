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

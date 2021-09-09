const fetchURL = 'http://localhost:3001/';
const appJson = 'application/json';

export const createUser = ({ name, email, password, role, token }) => {
  const body = JSON.stringify({
    name, email, password, role, token,
  });
  return fetch(`${fetchURL}users`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      Authorization: token,
    },
    body,
  }).then((response) => response.json());
};

export const getAllUsers = (token) => fetch(`${fetchURL}users`, {
  method: 'GET',
  headers: {
    Accept: appJson,
    'Content-Type': appJson,
    Authorization: token,
  },
}).then((response) => response.json());

export const deleteUser = (id, token) => fetch(`${fetchURL}users/${id}`, {
  method: 'DELETE',
  headers: {
    Accept: appJson,
    'Content-Type': appJson,
    Authorization: token,
  },
});

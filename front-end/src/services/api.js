const CONTENT = 'application/json';

const loginUser = (user) => {
  const endpoint = 'http://localhost:3001/users/login';
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
  const endpoint = 'http://localhost:3001/users/register';
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
  const endpoint = 'http://localhost:3001/admin/register';
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

export default {
  loginUser,
  registerUser,
  registerUserWithAdmin,
};

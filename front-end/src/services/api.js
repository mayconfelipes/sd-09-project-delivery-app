const loginUser = (user) => {
  const endpoint = 'http://localhost:3001/users/login';
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
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
};

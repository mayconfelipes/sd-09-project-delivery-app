const login = (email, password) => {
  const body = JSON.stringify({
    email,
    password,
  });

  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }).then((response) => response.json());
};

export default login;

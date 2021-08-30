const APP_SCHEMA = 'application/json';

export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': APP_SCHEMA,
    },
    body: JSON.stringify({ userName, email, password }),
  });

  const response = await request.json();
  return response;
};

export const userLogin = async ({ email, password }) => {
  const body = { email: `${email}`, password: `${password}` };
  const request = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': APP_SCHEMA,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  return response;
};

export const getSales = async (token) => {
  const request = await fetch('http://localhost:3001/sale', {
    method: 'GET',
    headers: {
      'Content-Type': APP_SCHEMA,
      Authorization: token,
    },
  });
  const response = await request.json();
  return response;
};

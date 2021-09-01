const APP_JSON = 'application/json';

export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': APP_JSON,
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
      'Content-Type': APP_JSON,
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  return response;
};

export const getProducts = async (token) => {
  const request = await fetch('http://localhost:3001/products', {
    method: 'GET',
    headers: {
      'Content-Type': APP_JSON,
      Authorization: token,
    },
  });
  const response = await request.json();
  return response;
};

export const getImg = async (token, imgPath) => {
  const request = await fetch(imgPath, {
    method: 'GET',
    headers: {
      'Content-Type': APP_JSON,
      Authorization: token,
    },
  });
  const response = await request.json();
  return response;
};

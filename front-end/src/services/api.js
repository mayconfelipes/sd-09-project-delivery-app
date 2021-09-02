const APP_SCHEMA = 'application/json';

export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/register', {
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

export const getSaleById = async (token, id) => {
  const request = await fetch(`http://localhost:3001/sale/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': APP_SCHEMA,
      Authorization: token,
    },
  });
  const response = await request.json();
  return response;
};

export const editStatusOrder = async (token, { id, status }) => {
  const body = { saleId: `${id}`, status: `${status}` };
  const request = await fetch('http://localhost:3001/sale/status', {
    method: 'PUT',
    headers: {
      'Content-Type': APP_SCHEMA,
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  const response = await request.json();
  return response;
};

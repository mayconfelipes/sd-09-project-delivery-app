const SALE = 'http://localhost:3001/sale';
const CONTENT_TYPE = 'application/json';

const options = (requestMethod, body = null, token = null) => {
  if (body) {
    return {
      method: requestMethod,
      headers: {
        'Content-Type': CONTENT_TYPE,
        Authorization: token,
      },
      body: JSON.stringify(body),
    };
  }

  return {
    method: requestMethod,
    headers: {
      'Content-Type': CONTENT_TYPE,
      Authorization: token,
    },
  };
};

export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch(
    'http://localhost:3001/register',
    options('POST', { userName, email, password }),
  );

  const response = await request.json();
  return response;
};

export const userLogin = async ({ email, password }) => {
  const body = { email: `${email}`, password: `${password}` };
  const request = await fetch(
    'http://localhost:3001/login',
    options('POST', body),
  );

  const response = await request.json();
  return response;
};

export const closeOrder = async (orderInfo) => {
  const userToken = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).token
    : 'token';

  const request = await fetch(SALE, options('POST', orderInfo, userToken));

  const response = await request.json();
  return response;
};

export const getSellers = async () => {
  const request = await fetch('http://localhost:3001/sellers', options('GET'));

  const response = await request.json();
  return response;
};

export const getProducts = async (token) => {
  const request = await fetch(
    'http://localhost:3001/products',
    options('GET', null, token),
  );
  const response = await request.json();
  return response;
};

export const getCostumerOrders = async (token) => {
  const request = await fetch(SALE, options('GET', null, token));
  const response = await request.json();
  return response;
};

export const getImg = async (token, imgPath) => {
  const request = await fetch(imgPath, options('GET', null, token));
  const response = await request.json();
  return response;
};

export const editStatusOrder = async (token, { id, status }) => {
  const body = { saleId: `${id}`, status: `${status}` };
  const request = await fetch('http://localhost:3001/sale/status', {
    method: 'PUT',
    headers: {
      'Content-Type': CONTENT_TYPE,
      Authorization: token,
    },
    body: JSON.stringify(body),
  });
  const response = await request.json();
  return response;
};

export const saleById = async (id, token) => {
  console.log(id, token);
  const request = await fetch(`http://localhost:3001/sale/${id}`, options('GET', null, token));
  const response = await request.json();

  // const request = await fetch(`http://localhost:3001/sale/${id}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': APP_JSON,
  //     Authorization: token,
  //   },
  // });
  // const response = await request.json();
  return response;
};

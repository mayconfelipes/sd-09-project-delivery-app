const options = (requestMethod, body = null, token = null) => {
  if (body) {
    return {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(body),
    };
  }

  return {
    method: requestMethod,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
};

export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/register', options('POST', { userName, email, password }));

  const response = await request.json();
  return response;
};

export const userLogin = async ({ email, password }) => {
  const body = { email: `${email}`, password: `${password}` };
  const request = await fetch('http://localhost:3001/login', options('POST', body));

  const response = await request.json();
  return response;
};

export const closeOrder = async (orderInfo) => {
  const userToken = JSON.parse(localStorage.getItem('user'))
    ? JSON.parse(localStorage.getItem('user')).token
    : 'token';

  const request = await fetch('http://localhost:3001/sale', options('POST', orderInfo, userToken));

  const response = await request.json();
  return response;
};

export const getSellers = async () => {
  const request = await fetch('http://localhost:3001/sellers', options('GET'));

  const response = await request.json();
  return response;
};

export const getProducts = async (token) => {
  const request = await fetch('http://localhost:3001/products', options('GET', null, token));
  const response = await request.json();
  return response;
};

export const getCostumerOrders = async (token) => {
  const request = await fetch('http://localhost:3001/sale', options('GET', null, token));
  const response = await request.json();
  return response;
};

export const getImg = async (token, imgPath) => {
  const request = await fetch(imgPath, options('GET', null, token));
  const response = await request.json();
  return response;
};

export const saleById = async (id, token) => {
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

const BASE_URL = 'http://localhost:3001';

export const fetchToLogin = (email, password, setInvalidUser, setRedirectTo) => {
  const body = {
    email,
    password,
  };

  const myHeadersToLogin = {
    'Content-Type': 'application/json',
  };

  fetch(`${BASE_URL}/login`, {
    headers: myHeadersToLogin,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message) {
        setInvalidUser(true);
      } else {
        localStorage.setItem('user', JSON.stringify(response));
        setRedirectTo(true);
      }
    });
};

export const fetchToRegister = (payload, setInvalidUser, setRedirectTo) => {
  const { token, email } = payload;
  const body = {
    email
  };

  const myHeadersToRegister = {
    'Content-Type': 'application/json',
    'Authorization': token,
  };

  fetch('http://localhost:3001/seller/orders', {
    headers: myHeadersToRegister,
    method: 'GET',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message) {
        setInvalidUser(true);
      } else {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        setRedirectTo(true);
      }
    });
};

export const fetchToSellers = (payload, setInvalidUser, setRedirectTo) => {
  const { name, email } = payload;
  const body = {
    name,
    email,
    password,
  };

  const myHeadersToRegister = {
    'Content-Type': 'application/json',
  };

  fetch('http://localhost:3001/register', {
    headers: myHeadersToRegister,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      if (response.message) {
        setInvalidUser(true);
      } else {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response));
        setRedirectTo(true);
      }
    });
};
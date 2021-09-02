const BASE_URL = 'http://localhost:3001';
const contentType = 'application/json';

export const fetchToLogin = (email, password, setInvalidUser, setRedirectTo) => {
  const body = {
    email,
    password,
  };

  const myHeadersToLogin = {
    'Content-Type': contentType,
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
  const { name, email, password } = payload;
  const body = {
    name,
    email,
    password,
  };

  const myHeadersToRegister = {
    'Content-Type': contentType,
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

export const getUsers = async (token, setUsers) => {
  const headers = {
    method: 'GET',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: token,
    },
  };

  const users = await fetch(`${BASE_URL}/users`, headers);
  const UserJson = await users.json();
  setUsers(UserJson);
};

export const createUser = (
  token,
  { nome, email, password, rol },
  setCreatedUser,
  setError,
) => {
  const body = {
    name: nome,
    email,
    password,
    role: rol,
  };

  fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: token,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.token) {
        setCreatedUser(true);
      }
      setError(true);
    })
    .catch(() => setError(true));
};

export const deleteUser = async (token, id, setDeleteUser) => {
  const headers = {
    method: 'DELETE',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: token,
    },
  };
  fetch(`${BASE_URL}/users/${id}`, headers)
    .then((res) => res.json())
    .then((obj) => {
      console.log(obj);
      setDeleteUser(true);
    });
};

const AppJson = 'application/json';

const register = (name, email, password, role) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    role,
  });

  return fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      Accept: AppJson,
      'Content-Type': AppJson,
    },
    body,
  }).then((response) => response.json());
};

const getRegister = async (role, Auth) => fetch(`http://localhost:3001/register/?role=${role}`, {
  method: 'GET',
  headers: {
    Accept: AppJson,
    'Content-Type': AppJson,
    Authorization: Auth,
  },
}).then((response) => response.json())
  .then((data) => data);

export { register, getRegister };

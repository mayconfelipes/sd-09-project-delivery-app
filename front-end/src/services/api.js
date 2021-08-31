export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  return response;
};

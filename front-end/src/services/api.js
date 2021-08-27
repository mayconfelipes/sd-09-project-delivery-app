export const userRegister = async ({ userName, email, password }) => {
  const request = await fetch('http://localhost:3001/register', {
    userName,
    email,
    password,
  });

  const response = await request.json();

  return response;
};

export const userLogin = async ({ email, password }) => {
  const request = await fetch('http://localhost:3001/login', {
    email,
    password,
  });

  const response = await request.json();

  return response;
};

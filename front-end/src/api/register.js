const Register = (name, email, password, role) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    role,
  });

  return fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }).then((response) => {
    response.json();
  });
};

export default Register;

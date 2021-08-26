import React from 'react';
import axiosApi from '../../service/axiosApi';

const Login = () => {
  const email = 'test@email.com';
  const password = '6261654984654698494894';
  console.log(axiosApi(email, password));

  return (
    <form>
      <input type="text" name="email" id="email" />
      <input type="text" name="password" id="password" />
      <button
        type="button"
        onClick={ () => axiosApi(email, password) }
      >
        Send

      </button>
    </form>
  );
};

export default Login;

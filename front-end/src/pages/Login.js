import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../utils/creators';

const route = 'common_login';

function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  // const [validLogin, setValidLogin] = useState(false);

  const handleChange = ({ target: { type, value } }) => {
    setState({ ...state, [type]: value });
  };

  return (
    <section>
      <h1>LOGIN</h1>
      <span data-testid={ `${route}__element-invalid-email` }>Invalid Email</span>
      { createInput('email', 'email', handleChange, route) }
      { createInput('password', 'password', handleChange, route) }
      { createButton('login', 'login', () => {}, route) }
      { createButton('register', 'register', () => {}, route) }
    </section>
  );
}

export default Login;

import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../utils/creators';

const route = 'common_register';

function Registration() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  // const [validRegister, setValidRegister] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <section>
      <h1>CADASTRO</h1>
      <span data-testid={ `${route}__element-invalid_register` }>Invalid Register</span>
      { createInput('name', 'text', handleChange, route) }
      { createInput('email', 'email', handleChange, route) }
      { createInput('password', 'password', handleChange, route) }
      { createButton('register', 'register', () => {}, route) }
    </section>
  );
}

export default Registration;

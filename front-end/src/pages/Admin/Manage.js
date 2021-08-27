import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton, createDropDown } from '../../utils/creators';

const route = 'admin_manage';

function Manage() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  // const [validLogin, setValidLogin] = useState(false);

  const handleChange = ({ target: { type, value } }) => {
    setState({ ...state, [type]: value });
  };

  return (
    <section>
      <h1>GERENCIAMENTO</h1>
      { createInput('name', 'text', handleChange, route) }
      { createInput('email', 'email', handleChange, route) }
      { createInput('password', 'password', handleChange, route)}
      { createDropDown('role', ['customer', 'seller', 'administrator'], () => {}, route) }
      { createButton('register', 'register', () => {}, route) }
    </section>
  );
}

export default Manage;

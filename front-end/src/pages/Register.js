import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createInput, createButton } from '../utils/creators';
import { emailOptions, nameOptions, passwordOptions } from '../data/InputOptions';
import { submitUser } from '../data/ButtonOptions';
import { registerUser } from '../services/api';
import { checkUser } from '../utils/checkFormats';
import { FormSection, ErrorMessage } from '../components';

const route = 'common_register';

function Registration() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const onClick = async () => {
    const data = await registerUser(state);
    if (data.error) return setError(true);
    localStorage.user = JSON.stringify(data);
    return setUser(data);
  };

  if (user.id) return <Redirect to="/customer/products" />;

  return (
    <FormSection>
      <h1>CADASTRO</h1>
      { createInput({ ...nameOptions, onChange: handleChange, route }) }
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({ ...submitUser, onClick, route, disabled: !checkUser(state) }) }
      { error && <ErrorMessage route={ route } field="_register" /> }
    </FormSection>
  );
}

export default Registration;

/*
  name: Joana a Moreira,
  email: joanaamoreira73@live.com,
  password:_lu2BT
*/

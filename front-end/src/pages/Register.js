import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createInput, createButton } from '../utils/creators';
import { emailOptions, nameOptions, passwordOptions } from '../data/InputOptions';
import { submitUser } from '../data/ButtonOptions';
import { registerUser } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';
import FormSection from '../components/StyledComponents/FormSection';

const route = 'common_register';

function Registration() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const [apiResponse, setApiResponse] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const onClick = async () => registerUser({ ...state })
    .then((data) => setApiResponse(data));

  if (apiResponse.id) {
    localStorage.user = JSON.stringify(apiResponse);
    return <Redirect to="/customer/products" />;
  }

  const checkFormats = () => {
    const nameFormat = /^[a-zA-ZÀ-ü ]{12}/g.test(state.name);
    const emailFormat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(state.email);
    const passwordFormat = /[\w\D]{6}/g.test(state.password);
    return nameFormat && emailFormat && passwordFormat;
  };

  return (
    <FormSection>
      <h1>CADASTRO</h1>
      { createInput({ ...nameOptions, onChange: handleChange, route }) }
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({ ...submitUser, onClick, route, disabled: !checkFormats() }) }
      { apiResponse.message && <ErrorMessage route={ route } field="_register" /> }
    </FormSection>
  );
}

export default Registration;

/*
  name: Joana a Moreira,
  email: joanaamoreira73@live.com,
  password:_lu2BT
*/

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../utils/creators';
import validateEmail from '../utils/validateEmail';
import { NAME_MIN_LENGTH, PASS_MIN_LENGTH } from '../utils/validationNumbers';
import { emailOptions, nameOptions, passwordOptions } from '../data/InputOptions';
import { finishRegisterButton } from '../data/ButtonOptions';
import { createUser } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';
import FormSection from '../components/StyledComponents/FormSection';

const route = 'common_register';

function Registration() {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const [apiResponse, setApiResponse] = useState({});
  const { name, email, password } = state;

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleRegister = async () => createUser({ name, email, password })
    .then((data) => setApiResponse(data));

  if (apiResponse.id) {
    localStorage.user = JSON.stringify(apiResponse);
    return <Redirect to="/customer/products" />;
  }

  return (
    <FormSection>
      <h1>CADASTRO</h1>
      { createInput({ ...nameOptions, onChange: handleChange, route }) }
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({
        ...finishRegisterButton,
        onClick: handleRegister,
        route,
        disabled: name.length < NAME_MIN_LENGTH
          || !validateEmail(email)
          || password.length < PASS_MIN_LENGTH,
      }) }
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

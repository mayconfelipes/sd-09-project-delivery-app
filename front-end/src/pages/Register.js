import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createInput, createButton } from '../utils/creators';
import validateEmail from '../utils/validateEmail';
import { NAME_MIN_LENGTH, PASS_MIN_LENGTH } from '../utils/validationNumbers';
import { emailOptions, nameOptions, passwordOptions } from '../data/InputOptions';
import { finishRegisterButton } from '../data/ButtonOptions';
import { register } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';

const route = 'common_register';

function Registration() {
  const [state, setState] = useState({
    nameInput: '', emailInput: '', passwordInput: '',
  });
  const [validRegister, setValidRegister] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { nameInput, emailInput, passwordInput } = state;

  const handleRegister = async () => {
    const response = await register(nameInput, emailInput, passwordInput);

    return response.message ? setValidRegister(false) : setValidRegister(true);
  };

  return (
    <section className="App">
      <h1>CADASTRO</h1>
      <span data-testid={ `${route}__element-invalid_register` }>Invalid Register</span>
      { createInput({ ...nameOptions, onChange: handleChange, route }) }
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({
        ...finishRegisterButton,
        onClick: handleRegister,
        route,
        disabled: nameInput.length < NAME_MIN_LENGTH
          || !validateEmail(emailInput)
          || passwordInput < PASS_MIN_LENGTH,
      }) }
      { !validRegister && <ErrorMessage route={ route } field="_register" /> }
    </section>
  );
}

export default Registration;

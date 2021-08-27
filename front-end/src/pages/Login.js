import React, { useState, useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { createInput, createButton } from '../utils/creators';
import { emailOptions, passwordOptions } from '../data/InputOptions';
import ErrorMessage from '../components/ErrorMessage';
import { login } from '../services/api';
import { loginButton, registerButton } from '../data/ButtonOptions';
// import rockGlass from '../images/rockGlass.svg';

const PASS_MIN_LENGTH = 6;
const route = 'common_login';

function Login() {
  const {
    apiResponse,
    loginErrorMessage,
    setApiResponse,
    setLoginErrorMessage,
  } = useContext(LoginContext);
  const [state, setState] = useState({ email: '', password: '' });
  // const [validLogin, setValidLogin] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleLogin = () => (
    login(state.email, state.password, setApiResponse, setLoginErrorMessage));

  const validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    return !!isValid;
  };

  return (
    <section>
      <h1>LOGIN</h1>
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({
        ...loginButton,
        onClick: handleLogin,
        route,
        disabled: !validateEmail(state.email) || state.password.length < PASS_MIN_LENGTH,
      })}
      { createButton({ ...registerButton, onClick: () => {}, route }) }
      { loginErrorMessage && <ErrorMessage route={ route } /> }
      { apiResponse && <p>Login efetuado</p> }
    </section>
  );
}

/*
email
  1 - adm@deliveryapp.com
  2 - fulana@deliveryapp.com
  3 - zebirita@email.com
password
  1 - --adm2@21!!--
  2 - fulana@123
  3 - $#zebirita#$
*/

export default Login;

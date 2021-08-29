import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { createInput, createButton } from '../utils/creators';
import validateEmail from '../utils/validateEmail';
import { PASS_MIN_LENGTH } from '../utils/validationNumbers';
import { emailOptions, passwordOptions } from '../data/InputOptions';
import ErrorMessage from '../components/ErrorMessage';
import { login } from '../services/api';
import { loginButton, registerButton } from '../data/ButtonOptions';
import rockGlass from '../images/rockGlass.svg';
import FormSection from '../components/StyledComponents/FormSection';

const route = 'common_login';

function Login() {
  const {
    loginErrorMessage,
    setApiResponse,
    setLoginErrorMessage,
  } = useContext(LoginContext);
  const [state, setState] = useState({ emailInput: '', passwordInput: '' });
  const [canRedirect, setCanRedirect] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleLogin = async () => {
    const response = await login(
      state.email, state.password, setApiResponse, setLoginErrorMessage,
    );

    if (response.token) return setCanRedirect(true);
  };

  return (
    <FormSection>
      <object data={ rockGlass } type="image/svg+xml">
        Glass
      </object>
      <h1>LOGIN</h1>
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({
        ...loginButton,
        onClick: handleLogin,
        route,
        disabled: !validateEmail(state.emailInput)
          || state.passwordInput.length < PASS_MIN_LENGTH,
      })}
      <Link to="/register">
        { createButton({ ...registerButton, onClick: () => {}, route }) }
      </Link>
      { loginErrorMessage && <ErrorMessage route={ route } field="-email" /> }
      { canRedirect && <p>Login efetuado</p> }
    </FormSection>
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

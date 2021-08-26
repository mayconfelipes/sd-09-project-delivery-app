import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import logoDelivery from '../images/logo-delivery.png';
import api from '../services/api';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  const verifyLoginCredentials = () => {
    const { email, password } = loginData;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < minPasswordLength) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyLoginCredentials();
  }, [loginData]);

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    const result = await api.loginUser(loginData);
    if (result.error) return setErrorMessage(result.error.message);
    localStorage.setItem('Token', JSON.stringify(result.token));
    localStorage.setItem('Role', JSON.stringify(result.role));
  };

  const errorDivMessage = (
    <div>
      <p data-testid="common_login__element-invalid-email">{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage() }
      >
        Tentar novamente
      </button>
    </div>
  );

  return (
    <main>
      <section>
        <img
          style={ { height: '200px', width: '200px' } }
          src={ logoDelivery }
          alt="app logo"
        />
        <h1>Delivery</h1>
      </section>
      <section>
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="Login"
          placeholderText="email@appdelivery.com.br"
          dataTestId="common_login__input-email"
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="************"
          dataTestId="common_login__input-password"
        />
        <LargeButton
          buttonText="LOGIN"
          isDisabled={ disableButton }
          onClick={ handleClick }
          dataTestId="common_login__button-login"
        />
        <Link to="/register">
          <LargeButton
            buttonText="Ainda não tenho conta"
            onClick={ () => {} }
            dataTestId="common_login__button-register"
          />
        </Link>
      </section>
      { errorMessage && errorDivMessage }
    </main>
  );
}

export default Login;

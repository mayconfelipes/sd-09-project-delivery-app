import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from '../context/loginContext';
import '../css/login.css';

const Login = () => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    handleClickLogin,
    invalidUser,
    redirectTo,
  } = useContext(LoginContext);

  const [disableButton, setDisable] = useState(false);

  const verifyInputs = () => {
    const emailRegex = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const passwordLength = 6;
    const isValid = email.match(emailRegex) && password.length >= passwordLength;
    if (isValid) setDisable(false);
    if (!isValid) setDisable(true);
  };

  const errorMsg = () => (
    <p data-testid="common_login__element-invalid-email">Email ou Senha Inválidos</p>);

  const chosseRouteToRedirect = () => {
    const userString = localStorage.getItem('User');
    const user = JSON.parse(userString);
    switch (user.role) {
    case 'customer': {
      return <Redirect to="/produtos" />;
    }
    case 'admim': {
      return <Redirect to="/administrador" />;
    }
    case 'seller': {
      return <Redirect to="/vendedor" />;
    }
    default: {
      console.log('Role inválida');
    }
    }
  };

  const loginForm = () => (
    <section className="login-form">
      <div className="fields">
        { invalidUser && errorMsg() }
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="common_login__input-email"
            name="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="common_login__input-password"
            name="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          type="button"
          id="login"
          className="login"
          data-testid="common_login__button-login"
          onClick={ handleClickLogin }
          disabled={ disableButton }
        >
          Entrar
        </button>

        <button
          type="button"
          id="register"
          className="register"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
        { redirectTo && chosseRouteToRedirect() }
      </div>
    </section>
  );

  useEffect(() => {
    verifyInputs();
  }, [email, password]);

  return (
    loginForm()
  );
};

export default Login;

import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from '../context/loginContext';

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

  const errorMsg = () => <p>Email ou Senha Inválidos</p>;

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

  useEffect(() => {
    verifyInputs();
  }, [email, password]);

  return (
    <section id="loginForm">
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
        data-testid="common_login__button-login"
        onClick={ handleClickLogin }
        disabled={ disableButton }
      >
        Entrar
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      { redirectTo && chosseRouteToRedirect() }
    </section>
  );
};

export default Login;

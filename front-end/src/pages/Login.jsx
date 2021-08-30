import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/loginContext';

const Login = () => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    handleClickLogin,
  } = useContext(LoginContext);

  const [disableButton, setDisable] = useState(false);

  const verifyInputs = () => {
    const emailRegex = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const passwordLength = 6;
    const isValid = email.match(emailRegex) && password.length >= passwordLength;
    if (isValid) setDisable(false);
    if (!isValid) setDisable(true);
  };

  useEffect(() => {
    verifyInputs();
  }, [email, password]);

  return (
    <section id="loginForm">
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
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
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ handleClickLogin }
        disabled={ disableButton }
      >
        Entrar
      </button>
    </section>
  );
};

export default Login;

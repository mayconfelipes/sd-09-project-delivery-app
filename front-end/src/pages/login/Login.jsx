import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);

  const validateForm = () => {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/igm.test(email);
    const minPasswordLength = 6;

    if (regex && password > minPasswordLength) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    validateForm();
    switch (name) {
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return undefined;
    }
  };

  return (
    <section className="login">
      <span className="appTitle">App Delivery</span>
      <form className="loginForm">
        <label htmlFor="emailInput">
          Email
          <input
            type="text"
            className="loginInput"
            placeholder="Email"
            name="email"
            id="emailInput"
            onChange={ handleChange }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            type="text"
            className="loginInput"
            placeholder="Senha"
            name="password"
            id="passwordInput"
            onChange={ handleChange }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ button }
        >
          Login
        </button>
      </form>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
    </section>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);

  const validateForm = () => {
    /* Regex found at: https://github.com/tryber/sd-09-live-lectures/tree/lecture/12.2 */
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
        <Button
          type="button"
          data-testid="common_login__button-login"
          name="Login"
          disabled={ button }
        />
      </form>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </section>
  );
};

export default Login;

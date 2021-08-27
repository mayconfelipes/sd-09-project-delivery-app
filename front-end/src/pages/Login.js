import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const History = useHistory();

  const buttonAble = () => {
    const MIN_CHARACTERS = 6;
    const check = /^[\S.]+@[a-z]+\.\w{2,3}$/g;
    if (check.test(email) && password.length >= MIN_CHARACTERS) {
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    History.push('/asdasd');
  };

  const handleRegister = () => {
    History.push('/register');
  };

  return (
    <div className="main">
      <img src="" alt="logotipo delivery-app" />
      <h1>Delivery App</h1>
      <form>
        <label htmlFor="input-email">
          Login
          <input
            type="email"
            id="input-email"
            data-testid="common_login__input-email"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            id="input-password"
            data-testid="common_login__input-password"
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>

        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !buttonAble() }
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__input-button-register"
          onClick={ handleRegister }
        >
          Ainda não tenho conta
        </button>
      </form>
      <div
        className="error-box"
        disabled
        data-testid="common_login__element-invalid-email"
      />
    </div>
  );
};

export default Login;

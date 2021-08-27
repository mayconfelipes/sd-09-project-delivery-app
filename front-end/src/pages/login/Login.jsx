import React, { useState } from 'react';
import { loginAPI } from '../../services/loginAPI';

function Login() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInputValid = () => {
    const passwordminLength = 6;

    const isDisabled = email.match(/\S+@\S+\.\S+/)
      && password.length >= passwordminLength;

    setIsButtonDisabled(!isDisabled);
  };

  const canUserLogin = async () => {
    const loginBody = { email, password };
    const responseLogin = await loginAPI(loginBody);
    console.log(responseLogin);
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        canUserLogin();
      } }
    >
      <div className="login-input">
        <label htmlFor="email">
          Login:
          <input
            type="email"
            name="email"
            onChange={ (e) => {
              setEmail(e.target.value);
              isInputValid();
            } }
            data-testid="common_login__input-email"
            placeholder="exemplo@exemplo.com"
            required
          />
        </label>
      </div>
      <div className="login-input">
        <label htmlFor="name">
          Senha
          <input
            type="password"
            name="password"
            onChange={ (e) => {
              setPassword(e.target.value);
              isInputValid();
            } }
            data-testid="common_login__input-password"
            placeholder="Barak Obama"
            required
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ isButtonDisabled }
      >
        LOGIN
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
      >
        AINDA NÃO TENHO CONTA
      </button>
    </form>
  );
}

export default Login;

import React, { useContext } from 'react';
import Context from '../context/Context';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(Context);

  const validateEmail = ({ target: { value } }) => {
    const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || value.length === 0) {
      setEmail('');
    } else {
      setEmail(value);
    }
  };

  const validatePassword = ({ target: { value } }) => {
    const minPasswordLength = 6;
    if (value.length < minPasswordLength) {
      setPassword('');
    } else {
      setPassword(value);
    }
  };

  // const submit = () => {

  // };

  return (
    <div className="App">
      <h1>Login</h1>
      <input
        type="email"
        name="login-email"
        onChange={ validateEmail }
        data-testid="common_login__input-email"
        placeholder="email@email.com"
        className="email-password"
      />
      <input
        type="password"
        name="login-password"
        onChange={ validatePassword }
        data-testid="common_login__input-password"
        placeholder="Digite sua senha"
        className="email-password"
      />
      <button
        type="submit"
        // onClick={ submit }
        data-testid="common_login__button-login"
        disabled={ email === '' || password === '' }
        className="btn-submit"
      >
        LOGIN
      </button>
      <button type="button" data-testid="common_login__button-register">
        Ainda não tenho conta
      </button>
      <div>
        <p data-testid="common_login__element-invalid-email">email inválido</p>
      </div>
    </div>
  );
}

export default Login;

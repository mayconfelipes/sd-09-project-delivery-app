import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Login</h1>
      <input
        type="email"
        name="login-email"
        data-testid="common_login__input-email"
      />
      <input
        type="password"
        name="login-password"
        data-testid="common_login__input-password"
      />
      <button type="submit" data-testid="common_login__button-login">
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      <div>
        <p data-testid="common_login__element-invalid-email">email inválido</p>
      </div>
    </div>
  );
}

export default Login;

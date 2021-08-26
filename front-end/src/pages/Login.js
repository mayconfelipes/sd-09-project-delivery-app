import React from 'react';

function Login() {
  return (
    <div>
      <h3>Login</h3>
      <div>
        <label htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            name="login"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="text"
            id="password"
            name="password"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';

function Login() {
  return (
    <form>
      <div className="login-input">
        <label htmlFor="email">
          Enter you email:
          <input
            type="email"
            name="email"
            data-testid="common_login__input-email"
            // value={ email }
            placeholder="exemplo@exemplo.com"
            required
          />
        </label>
      </div>
      <div className="login-input">
        <label htmlFor="name">
          Enter you Name:
          <input
            type="text"
            name="name"
            data-testid="common_login__input-password"
            // value={ name }
            placeholder="Barak Obama"
            required
          />
        </label>
      </div>
      <button type="button" data-testid="common_login__button-login">LOGIN</button>
      <button
        type="button"
        data-testid="common_login__button-register">
          AINDA NÃO TENHO CONTA
      </button>
    </form>
  );
}

export default Login;

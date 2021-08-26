import React from 'react';

function Login() {
  const createInput = (name, title) => (
    <div>
      <label htmlFor={ name }>{ title }</label>
      <input
        id={ name }
        name={ name }
        type={ name }
        data-testid={ `common_login__input-${name}` }
      />
    </div>
  );

  return (
    <div>
      <form>
        { createInput('email', 'Login') }
        { createInput('password', 'Senha') }
        <button type="submit" data-testid="common_login__button-login">
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordMinLength = 6;
    if (emailRegex.test(email) && password.length >= passwordMinLength) {
      return setValid(true);
    }
    setValid(false);
  }, [email, password]);

  return (
    <div className="login-page">
      <form>
        <label htmlFor="login-input">
          Login
          <input
            type="text"
            name="login-input"
            data-testid="common_login__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password-input"
            data-testid="common_login__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !valid }
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
      <p data-testid="common_login__element-invalid-email">
        Elemento oculto (Mensagens de erro)
      </p>
    </div>
  );
}

export default Login;

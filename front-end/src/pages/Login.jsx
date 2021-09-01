import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';
import '../App.css';

function Login() {
  const history = useHistory();
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(Context);

  const [errorMessage, setErrorMessage] = useState();

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

  const validateUser = async (e) => {
    e.preventDefault();
    try {
      const { data: { user: { name, email: em, role, token } } } = await axios({
        method: 'post',
        url: 'http://localhost:3001/user/login',
        data: { email, password },
      });

      localStorage.setItem('user', JSON.stringify({ name, email: em, role, token }));
      history.push('/customer/products');
      return response;
    } catch (err) {
      setErrorMessage('Dados inválidos.');
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form className="login-form">
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
          onClick={ validateUser }
          data-testid="common_login__button-login"
          disabled={ email === '' || password === '' }
          className="btn-submit"
        >
          LOGIN
        </button>
      </form>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>
      <div>
        <p data-testid="common_login__element-invalid-email">
          { errorMessage }
        </p>
      </div>
    </div>
  );
}

export default Login;

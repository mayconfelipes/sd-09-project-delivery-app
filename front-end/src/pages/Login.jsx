import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import context from '../services/context';
import * as api from '../services/api';

const errorMessageTimeout = 2000;

function Login() {
  const { setUserInfo } = useContext(context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [showInvalidLoginError, setInvalidLoginError] = useState('');

  const history = useHistory();

  useEffect(() => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordMinLength = 6;
    if (emailRegex.test(email) && password.length >= passwordMinLength) {
      return setValid(true);
    }
    setValid(false);
  }, [email, password]);

  const showInvalidLoginMessage = (message) => {
    setInvalidLoginError(message);
    setTimeout(() => setInvalidLoginError(''), errorMessageTimeout);
  };

  const loginUser = async () => {
    try {
      const { data } = await api.loginUser(email, password);
      localStorage.setItem('user', JSON.stringify(data));
      setUserInfo(data);
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      showInvalidLoginMessage(error.message);
    }
  };

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
          onClick={ () => loginUser() }
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
        { showInvalidLoginError }
      </p>
    </div>
  );
}

export default Login;

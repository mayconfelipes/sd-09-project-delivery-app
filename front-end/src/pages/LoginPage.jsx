import React, { useEffect, useState, useContext } from 'react';
// import React, { useEffect, useState } from 'react';
// import { Link, Redirect, useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import * as api from '../services/api';

function Login() {
  const { setUserInfo } = useContext(ProductsContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [showInvalidLoginError, setInvalidLoginError] = useState('');

  // const history = useHistory();
  const errorMessageTimeout = 2000;

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

  const redirectByRole = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.role === 'customer') return <Redirect to="/customer/products" />;
    if (user.role === 'seller') return <Redirect to="/seller/orders" />;
    if (user.role === 'administrator') return <Redirect to="/admin/manage" />;
  };

  const loginUser = async () => {
    try {
      const { data } = await api.loginUser(email, password);
      localStorage.setItem('user', JSON.stringify(data));
      setUserInfo(data);
      redirectByRole();
    } catch (error) {
      console.log(error);
      showInvalidLoginMessage(error.message);
    }
  };

  return localStorage.getItem('user') ? redirectByRole()
    : (
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

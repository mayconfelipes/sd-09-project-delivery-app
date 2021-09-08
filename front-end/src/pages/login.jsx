import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import status from '../utils/status';

const Login = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);
  const [error, setError] = useState(
    state ? state.error : '',
  );
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return undefined;
    }
  };

  // Validação do form
  useEffect(
    () => {
      /* Regex found at: https://github.com/tryber/sd-09-live-lectures/tree/lecture/12.2 */
      const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/igm.test(email);
      const PASSWORD_MIN_LENGTH = 6;

      if (regex && password.length >= PASSWORD_MIN_LENGTH) {
        setButton(false);
      } else {
        setButton(true);
      }
    },
    [email, password],
  );

  const redirectUser = (role) => {
    switch (role) {
    case 'customer':
      history.push('/customer/products');
      break;
    case 'seller':
      history.push('/seller/products');
      break;
    case 'administrator':
      history.push('/admin/manage');
      break;
    default:
      break;
    }
  };

  const handleLogin = async () => {
    const LOGIN_URL = 'http://localhost:3001/api/login';
    const payload = { email, password };

    await axios.post(LOGIN_URL, payload)
      .then(
        (response) => {
          const { token, user: { name, role, id } } = response.data;
          const user = {
            id,
            name,
            email,
            role,
            token,
          };
          localStorage.setItem('user', JSON.stringify(user));
          redirectUser(user.role);
        },
        ({ response: { status: errorStatus } }) => {
          if (errorStatus === status.HTTP_500_INTERNAL_SERVER_ERROR) {
            setError('Algo deu errado!');
          } else {
            setError('Credenciais inválidas');
          }
        },
      );
  };

  if (userData) {
    return (
      <Redirect to="/customer/products" />
    );
  }

  return (
    <section className="login">
      <h1 className="appTitle">App Delivery</h1>
      {
        error.length > 0
        && <span data-testid="common_login__element-invalid-email">{ error }</span>
      }
      <form>
        <label htmlFor="emailInput">
          Email
          <input
            type="text"
            className="loginInput"
            placeholder="Email"
            name="email"
            id="emailInput"
            onChange={ handleChange }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            type="password"
            className="loginInput"
            placeholder="Senha"
            name="password"
            id="passwordInput"
            onChange={ handleChange }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          name="Login"
          disabled={ button }
          onClick={ handleLogin }
        >
          Login
        </button>
      </form>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </section>
  );
};

export default Login;

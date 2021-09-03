import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Context from '../context/Context';
import './Login.css';
import cervaApp from '../images/cerva-app.png';

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
    const redirectRole = {
      customer: '/customer/products',
      seller: '/seller/orders',
      administrator: '/admin/manage',

    };

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/user/login',
        data: { email, password },
      });
      const { data } = response;
      localStorage.setItem('user', JSON.stringify(data.user));
      history.push(redirectRole[data.user.role]);
      return response;
    } catch (err) {
      setErrorMessage('Dados inválidos.');
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div className="formContent">
        <div className="fadeIn first">
          <img
            src={ cervaApp }
            className="icon"
            alt="icon"
          />
          <br />
          <h1>Cerva App</h1>
          <h2>Login</h2>
        </div>
        <form className="">
          <input
            type="email"
            name="login-email"
            onChange={ validateEmail }
            data-testid="common_login__input-email"
            placeholder="email@email.com"
            className="email-password fadeIn second"
          />
          <input
            type="password"
            name="login-password"
            onChange={ validatePassword }
            data-testid="common_login__input-password"
            placeholder="Digite sua senha"
            className="email-password fadeIn third"
          />
          <button
            type="submit"
            onClick={ validateUser }
            data-testid="common_login__button-login"
            disabled={ email === '' || password === '' }
            className="btn-submit fadeIn fourth"
          >
            LOGIN
          </button>
        </form>
        <div className="formFooter underlineHover">
          <button
            type="button"
            className="fadeIn five"
            data-testid="common_login__button-register"
            onClick={ () => history.push('/register') }
          >
            Ainda não tenho conta
          </button>
          <p data-testid="common_login__element-invalid-email">
            { errorMessage }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/axiosApi';
import './login.css';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const data = userData;
  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange({ target }) {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { email, password } = userData;
    const emailValidated = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);
    const passwordRegex = new RegExp(/[\w\D]{7}/g).test(password);

    if (emailValidated && passwordRegex) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [userData]);

  return (
    <form className="px-5 py-7">
      <label htmlFor="input-email" className="label-email">
        E-mail
        <input
          type="text"
          name="email"
          className="input-email"
          onChange={ handleInputChange }
          data-testid="common_login__input-email"
        />
      </label>
      <label htmlFor="label-password" className="label-password">
        Password
        <input
          type="text"
          name="password"
          className="input-password"
          onChange={ handleInputChange }
          data-testid="common_login__input-password"
        />
      </label>
      <button
        type="button"
        name="login"
        className="login-button"
        data-testid="common_login__button-login"
        disabled={ isDataValid }
        onClick={ () => api.post('/login', data).then((res) => console.log(res)) }
      >
        Login
      </button>
      <Link to="/register">
        <button
          type="button"
          name="register"
          data-testid="common_login__button-register"
          className="register-button"
        >
          Register
        </button>
      </Link>
    </form>
  );
};

export default Login;

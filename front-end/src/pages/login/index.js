import React, { useState, useEffect } from 'react';
import api from '../../service/axiosApi';
import './login.css';

const Login = () => {

  const [userData, setUserData] = useState({
    emailInput: '',
    passwordInput: '',
  });
  const data = userData;
  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange({ target }) {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { emailInput, passwordInput } = userData;
    const emailValidated = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(emailInput);
    const passwordRegex = new RegExp(/[\w\D]{7}/g).test(passwordInput);

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
          name="emailInput"
          className="input-email"
          onChange={ handleInputChange }
          data-testId="common_login__input-email"
        />
      </label>
      <label htmlFor="label-password" className="label-password">
        Password
        <input
          type="text"
          name="passwordInput"
          className="input-password"
          onChange={ handleInputChange }
          data-testId="common_login__input-password"
        />
      </label>
      <button
        type="button"
        name="login"
        className="login-button"
        data-testId="common_login__button-login"
        disabled={ isDataValid }
        onClick={ () => api.post('/login', data).then((res) => console.log(res)) }
      >
        Login
      </button>
      <button
        type="button"
        name="register"
        data-testId="common_login__button-register"
        className="register-button"
        onClick={ () => api.post('/login', { email, password })
          .then((response) => console.log(response)) }
      >
        Register
      </button>
    </form>
  );
};

export default Login;

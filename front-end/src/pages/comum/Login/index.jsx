import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import PrimaryButton from '../../../components/PrimaryButton';
import TertiaryButton from '../../../components/TertiaryButton';

import login from '../../../api/login';

import style from './login.module.scss';

const Login = () => {
  const [userData, setUserData] = useState({
    emailInput: '',
    passwordInput: '',
  });

  const [isLogged, setIsLogged] = useState(false);

  const [invalidLogin, setInvalidLogin] = useState(false);

  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { emailInput, passwordInput } = userData;
    const emailValidated = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput);
    const passwordRegex = new RegExp(/[\w\D]{6}/g);

    if (emailValidated && passwordRegex.test(passwordInput)) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }

    return () => null;
  }, [userData]);

  const sendLoginRequest = async () => {
    const { emailInput, passwordInput } = userData;
    const { token } = await login(emailInput, passwordInput);
    if (token) setIsLogged(true);
    else setInvalidLogin(true);
  };

  return (
    <section className={ style.loginContainer }>
      { isLogged && <Redirect to="/customer/products" /> }
      <h1>APP Delivery</h1>
      <form className={ style.inputContainer }>
        <label htmlFor="inputEmail" className={ style.inputStyle }>
          Email
          <input
            id="inputEmail"
            data-testid="common_login__input-email"
            name="emailInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="inputPassword" className={ style.inputStyle }>
          Senha
          <input
            id="inputPassword"
            type="password"
            data-testid="common_login__input-password"
            name="passwordInput"
            onChange={ handleInputChange }
          />
        </label>
        <PrimaryButton
          isBtnDisabled={ isDataValid }
          dataTestId="common_login__button-login"
          onLoginClick={ sendLoginRequest }
        >
          Login
        </PrimaryButton>
        <Link to="/register">
          <TertiaryButton
            dataTestId="common_login__button-register"
          >
            Ainda não tenho conta
          </TertiaryButton>
        </Link>
        {
          invalidLogin && (
            <h4 data-testid="common_login__element-invalid-email">
              Email e/ou senha inválidos
            </h4>
          )
        }
      </form>
    </section>
  );
};

export default Login;

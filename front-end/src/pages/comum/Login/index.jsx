import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import Input from '../../../components/Input';
import PrimaryButton from '../../../components/PrimaryButton';
import TertiaryButton from '../../../components/TertiaryButton';

import style from './login.module.scss';

const Login = () => {
  const [userData, setUserData] = useState({
    emailInput: '',
    passwordInput: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange({ target }) {
    const { name, value } = target;
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
  }, [userData]);

  return (
    <section className={ style.loginContainer }>
      <h1>APP Delivery</h1>
      <form className={ style.inputContainer }>
        <label htmlFor="input" className={ style.inputStyle }>
          Login
          <input
            id="input"
            data-testid="common_login__input-email"
            name="emailInput"
            onChange={ handleInputChange }
          />
        </label>
        {/* <Input
          onInputChange={ handleInputChange }
          labelDescription="Login"
          dataTestId="common_login__input-email"
          inputName="emailInput"
        /> */}
        <label htmlFor="input" className={ style.inputStyle }>
          Login
          <input
            id="input"
            data-testid="common_login__input-password"
            name="passwordInput"
            onChange={ handleInputChange }
          />
        </label>
        {/* <Input
          onInputChange={ handleInputChange }
          labelDescription="Senha"
          dataTestId="common_login__input-password"
          inputName="passwordInput"
        /> */}
        <Link to="/customer/products">
          <PrimaryButton
            isBtnDisabled={ isDataValid }
            dataTestId="common_login__button-login"
          >
            Login
          </PrimaryButton>
        </Link>
        <Link to="/register">
          <TertiaryButton
            dataTestId="common_login__button-register"
          >
            Ainda não tenho conta
          </TertiaryButton>
        </Link>
        <p
          data-testid="common_login__element-invalid-email"
        >
          Se email inválido mostrar uma mensagem
        </p>
      </form>
    </section>
  );
};

export default Login;

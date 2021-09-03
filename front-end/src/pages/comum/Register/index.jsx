import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import PrimaryButton from '../../../components/PrimaryButton';

import style from './register.module.scss';

import { register } from '../../../api/register';

const Register = () => {
  const [userData, setUserData] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);
  const [isLogged, setIsLoggedStatus] = useState(false);
  const [cadasterFailure, setCadasterFailure] = useState(false);

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { emailInput, passwordInput, nameInput } = userData;
    const emailValidated = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput);
    const passwordRegex = new RegExp(/[\w\D]{6}/g).test(passwordInput);
    const nameLength = new RegExp(/[\w\D]{12}/g).test(nameInput);

    if (emailValidated && passwordRegex && nameLength) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [userData]);

  const sendLoginRequest = async () => {
    const { nameInput, emailInput, passwordInput } = userData;
    const role = 'customer';
    const { token } = await register(nameInput, emailInput, passwordInput, role);
    localStorage.setItem('user', JSON.stringify({ name: nameInput, token }));
    if (token) setIsLoggedStatus(true);
    else setCadasterFailure(true);
  };

  return (
    <section className={ style.loginContainer }>
      { isLogged && <Redirect to="/customer/products" /> }
      <h1>Cadastro</h1>
      <form className={ style.inputContainer }>
        <label htmlFor="input" className={ style.inputStyle }>
          Nome
          <input
            id="input"
            data-testid="common_register__input-name"
            name="nameInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="input" className={ style.inputStyle }>
          Email
          <input
            id="input"
            data-testid="common_register__input-email"
            name="emailInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="input" className={ style.inputStyle }>
          Senha
          <input
            id="input"
            data-testid="common_register__input-password"
            name="passwordInput"
            onChange={ handleInputChange }
          />
        </label>
        <PrimaryButton
          isBtnDisabled={ isDataValid }
          dataTestId="common_register__button-register"
          onLoginClick={ sendLoginRequest }
        >
          CADASTRAR
        </PrimaryButton>
        { cadasterFailure && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            Usuário já existe
          </p>
        ) }

      </form>
    </section>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PrimaryButton from '../../../components/PrimaryButton';

import style from './register.module.scss';

const Register = () => {
  const [userData, setUserData] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange({ target }) {
    const { name, value } = target;
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

  return (
    <section className={ style.loginContainer }>
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
        <Link to="/customer/products">
          <PrimaryButton
            isBtnDisabled={ isDataValid }
            dataTestId="common_register__button-register"
          >
            CADASTRAR
          </PrimaryButton>
        </Link>
        <p
          data-testid="common_register__element-invalid_register"
        >
          Mostrar uma mensagem caso o registro seja inválido
        </p>
      </form>
    </section>
  );
};

export default Register;

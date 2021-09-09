import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from '../context/loginContext';
import '../css/login.css';

const Register = () => {
  const [disableButton, setDisable] = useState(true);

  const {
    name,
    setName,
    email,
    setEmail,
    setPassword,
    password,
    invalidUser,
    redirectTo,
    handleClickRegister,
  } = useContext(LoginContext);

  const verifyInputs = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    const nameLength = 12;
    const isValidEmail = email.match(emailRegex);
    const isValidPass = password.length >= passwordLength;
    const isValidName = name.length >= nameLength;

    if (isValidEmail && isValidPass && isValidName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    verifyInputs();
  }, [email, password, name]);

  const errorMsg = () => (
    <p data-testid="common_register__element-invalid_register">
      Email ou Senha Inválidos
    </p>
  );

  const registerForm = () => (
    <section className="login-form">
      <div className="fields">
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            data-testid="common_register__input-name"
            name="name"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            data-testid="common_register__input-email"
            name="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            data-testid="common_register__input-password"
            name="password"
            placeholder="********"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="button"
          id="login"
          className="login"
          data-testid="common_register__button-register"
          onClick={ handleClickRegister }
          disabled={ disableButton }
        >
          Cadastrar
        </button>
        { invalidUser && errorMsg() }
        { redirectTo && <Redirect to="/customer/products" />}
      </div>
    </section>
  );

  return registerForm();
};

export default Register;

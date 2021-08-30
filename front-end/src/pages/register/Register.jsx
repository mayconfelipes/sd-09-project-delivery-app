import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../../services/registerAPI';
import useStyle from './registerPage.style';

export default function Register() {
  // const [error, setError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyle();

  const canUserRegister = async () => {
    const registerBody = { name, email, password };
    const responseRegister = await registerAPI(registerBody);
    console.log(responseRegister);
    // if (error === true) {
    //   toast('Email já registrado');
    // }
  };

  const isInputValid = (passwordInputValue = password) => {
    const numberToComperPassword = 6;
    const numberToComperName = 12;

    if (
      name.length >= numberToComperName
      && email.match(/\S+@\S+\.\S+/)
      && passwordInputValue.length >= numberToComperPassword
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <>
      <div
        data-testid="common_register__element-invalid_register"
      >
        <ToastContainer />
      </div>
      <p className={ classes.registerTitle }>Cadastro</p>
      <form
        className={ classes.formsContainer }
        onSubmit={ (e) => {
          e.preventDefault();
          canUserRegister();
        } }
      >
        <div>
          <div>
            <p
              className={ classes.inputTitles }
            >
              Nome
            </p>
            <input
              className={ classes.input }
              data-testid="common_register__input-name"
              type="text"
              placeholder="Seu nome"
              value={ name }
              onChange={ (e) => {
                setName(e.target.value);
                isInputValid();
              } }
            />
          </div>
          <div>
            <p
              className={ classes.inputTitles }
            >
              Email
            </p>
            <input
              className={ classes.input }
              data-testid="common_register__input-email"
              type="email"
              placeholder="seu-email@site.com.br"
              value={ email }
              onChange={ (e) => {
                setEmail(e.target.value);
                isInputValid();
              } }
            />
          </div>
          <div>
            <p
              className={ classes.inputTitles }
            >
              Senha
            </p>
            <input
              className={ classes.input }
              data-testid="common_register__input-password"
              type="password"
              placeholder="*********"
              value={ password }
              onChange={ (e) => {
                setPassword(e.target.value);
                isInputValid(e.target.value);
              } }
            />
          </div>
          <button
            className={ classes.buttonStyle }
            data-testid="common_register__button-register"
            disabled={ isButtonDisabled }
            type="submit"
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </>
  );
}

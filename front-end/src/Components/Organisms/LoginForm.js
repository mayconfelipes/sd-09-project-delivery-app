import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../Molecules/InputText';
import Text from '../Atoms/Text';
import Button from '../Atoms/Button';
import { LoginForm } from '../styles';
import validation from '../../validation/userValidation';
import { userLogin } from '../../services/api';

const notFound = 404;
const statusOk = 200;

function LoginFormComponent() {
  const inicialFormData = {
    login: '',
    password: '',
  };
  const [loginForm, setLoginForm] = useState(inicialFormData);
  const [errorMessage, setErrorMessage] = useState({});
  const { login, password } = loginForm;
  const history = useHistory();

  useEffect(() => {
    const isEmailValid = validation.emailValidation(login);
    if (!isEmailValid) {
      return setErrorMessage({ message: 'Insira um Email Válido' });
    }

    const isPasswordValid = validation.passwordValidation(password);
    if (!isPasswordValid) {
      return setErrorMessage({ message: 'A senha deve ter ao menos 6 digitos' });
    }

    if (isEmailValid && isPasswordValid) {
      return setErrorMessage({ });
    }
  }, [login, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    console.log(loginForm);
    setLoginForm({ ...loginForm, [name]: value });
  };

  //  Teste
  const logIn = async () => {
    const response = await userLogin({ email: login, password });
    const { status } = response;
    if (status === notFound) {
      const { message } = await response.json();
      setErrorMessage({ message: `Error ${status}: ${message}` });
    }

    if (status === statusOk) {
      return history.push('/customer/products');
    }
  };

  return (
    <LoginForm>
      <InputText
        name="login"
        placeholder="email@trybe.com.br"
        inputType="text"
        testId="common_login__input-email"
        onChange={ handleChange }
      />
      <InputText
        name="password"
        inputType="password"
        testId="common_login__input-password"
        onChange={ handleChange }
      />
      <Button
        text="Login"
        styleColor="primary"
        testId="common_login__button-login"
        onClick={ logIn }
        isDisabled={ !validation.validationForLogin({ login, password }) }
      />
      <Button
        text="Ainda não tenho conta"
        styleColor="primary"
        testId="common_login__button-register"
        onClick={ logIn }
      />
      {errorMessage.message
        ? <Text testId="common_login__element-invalid-email">{errorMessage.message}</Text>
        : null}
    </LoginForm>
  );
}

export default LoginFormComponent;

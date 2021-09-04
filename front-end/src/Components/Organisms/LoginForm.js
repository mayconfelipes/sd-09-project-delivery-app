import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import InputText from '../Molecules/InputText';
import Text from '../Atoms/Text';
import Title from '../Atoms/Title';
import Button from '../Atoms/Button';
import { FormElement } from '../styles';
import validation from '../../validation/userValidation';
import { userLogin } from '../../services/api';

function LoginFormComponent({ title }) {
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
    setLoginForm({ ...loginForm, [name]: value });
  };

  const logIn = async () => {
    const response = await userLogin({ email: login, password });
    if (response.message) {
      return setErrorMessage({
        message: 'Login ou senha inválidos! :(',
      });
    }
    localStorage.setItem('user', JSON.stringify(response));
    if (response.role === 'customer') {
      history.push('/customer/products');
    } else if (response.role === 'seller') {
      history.push('/seller/orders');
    } else {
      history.push('/admin/manage');
    }
  };

  return (
    <FormElement>
      <Title>{title}</Title>
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
      <Link to="/register">
        <Button
          text="Ainda não tenho conta"
          styleColor="primary"
          testId="common_login__button-register"
        />
      </Link>

      {errorMessage.message
        ? <Text testId="common_login__element-invalid-email">{errorMessage.message}</Text>
        : null}
    </FormElement>
  );
}

LoginFormComponent.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default LoginFormComponent;

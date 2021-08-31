import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import InputText from '../Molecules/InputText';
import Text from '../Atoms/Text';
import Title from '../Atoms/Title';
import Button from '../Atoms/Button';
import { FormElement } from '../styles';
import validation from '../../validation/userValidation';
import { userRegister } from '../../services/api';

function RegisterFormComponent({ title }) {
  const initialFormData = {
    userName: '',
    email: '',
    password: '',
  };

  const [registerForm, setRegisterForm] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState({});
  const { userName, password, email } = registerForm;
  const history = useHistory();

  useEffect(() => {
    const isUserNameValid = validation.userNameValidation(userName);
    if (!isUserNameValid) {
      return setErrorMessage({ message: 'Insira um Nome de usuário Válido' });
    }

    const isEmailValid = validation.emailValidation(email);
    if (!isEmailValid) {
      return setErrorMessage({ message: 'Insira um Email Válido' });
    }

    const isPasswordValid = validation.passwordValidation(password);
    if (!isPasswordValid) {
      return setErrorMessage({ message: 'A senha deve ter ao menos 6 digitos' });
    }

    if (isEmailValid && isPasswordValid && isUserNameValid) {
      return setErrorMessage({ });
    }
  }, [userName, password, email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const verifyData = () => validation.userNameValidation(userName)
      && validation.passwordValidation(password)
      && validation.emailValidation(email);

  const postNewUser = async () => {
    const response = await userRegister(registerForm);

    return response.message
      ? setErrorMessage({
        message: response.message,
      }) : history.push('/customer/products');
  };

  return (
    <FormElement>
      <Title>{title}</Title>
      <InputText
        name="userName"
        inputType="text"
        testId="common_register__input-name"
        onChange={ handleChange }
      />
      <InputText
        name="email"
        placeholder="email@trybe.com.br"
        inputType="email"
        testId="common_register__input-email"
        onChange={ handleChange }
      />
      <InputText
        name="password"
        inputType="password"
        testId="common_register__input-password"
        onChange={ handleChange }
      />
      <Button
        text="Cadastrar"
        styleColor="primary"
        testId="common_register__button-register"
        onClick={ postNewUser }
        isDisabled={ !verifyData() }
      />

      {errorMessage.message
        ? (
          <Text testId="common_register__element-invalid_register">
            {errorMessage.message}
          </Text>
        )
        : null}
    </FormElement>
  );
}

RegisterFormComponent.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default RegisterFormComponent;

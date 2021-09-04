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
        name="Nome"
        inputType="text"
        testId="admin_manage__input-name"
        onChange={ handleChange }
      />
      <InputText
        name="Email"
        placeholder="email@trybe.com.br"
        inputType="email"
        testId="admin_manage__input-email"
        onChange={ handleChange }
      />
      <InputText
        name="Senha"
        inputType="password"
        testId="admin_manage__input-password"
        onChange={ handleChange }
      />
      <div>
        <label htmlFor="seller">
          Tipo
          <select
            onChange={ handleChange }
            id="seller"
            data-testid="admin_manage__select-role"
          >
            <option value="vendedora" key="vendedora">
              Vendedora
            </option>
          </select>
        </label>
      </div>
      <Button
        text="CADASTRAR"
        styleColor="primary"
        testId="admin_manage__button-register"
        onClick={ postNewUser }
        isDisabled={ !verifyData() }
      />

      {errorMessage.message
        ? (
          <Text testId="admin_manage__element-invalid_register">
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

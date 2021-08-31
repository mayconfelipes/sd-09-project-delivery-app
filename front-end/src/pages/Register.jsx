import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';

function Register() {
  // estados para utilizar na pagina
  const [newUserData, setNewUserData] = useState({
    nome: '', email: '', password: '', role: 'customer',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  // verifica se pode fazer o cadastro
  const verifyNewUserCredentials = () => {
    const { nome, email, password } = newUserData;
    const minNameLength = 12;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (nome.length < minNameLength) {
      setDisableButton(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < minPasswordLength) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyNewUserCredentials();
  }, [newUserData]);

  const handleChange = ({ target: { name, value } }) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  const history = useHistory();

  const handleClick = async () => {
    const result = await api.registerUser(newUserData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(result));
      history.push('/customer/products');
    }
  };

  const cleanFields = () => {
    setErrorMessage();
    const name = document.getElementById('nome');
    name.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const password = document.getElementById('password');
    password.value = '';
    setNewUserData({ nome: '', email: '', password: '', role: 'customer' });
  };

  const errorDivMessage = (
    <div>
      <p data-testid="common_register__element-invalid_register">{ errorMessage }</p>
      <button
        type="button"
        onClick={ cleanFields }
      >
        Limpar
      </button>
    </div>
  );

  return (
    <main>
      <section>
        <p>Cadastro</p>
        <TextInput
          type="text"
          name="nome"
          onChange={ handleChange }
          labelText="Nome"
          placeholderText="Nome completo"
          dataTestId="common_register__input-name"
        />
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="email"
          placeholderText="email desejado"
          dataTestId="common_register__input-email"
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="senha"
          dataTestId="common_register__input-password"
        />
        <LargeButton
          buttonText="CADASTRAR"
          onClick={ handleClick }
          isDisabled={ disableButton }
          dataTestId="common_register__button-register"
        />
      </section>
      { errorMessage && errorDivMessage }
    </main>

  );
}

export default Register;

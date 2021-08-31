import React, { useState, useEffect } from 'react';
import api from '../services/api';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import DropDownList from '../components/DropDownList';
import dataTestIds from '../utils/dataTestIds';

function Admin() {
  const [newUserData, setNewUserData] = useState({
    nome: '', email: '', password: '', role: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  // verifica se pode fazer o cadastro
  const verifyNewUserCredentials = () => {
    const { nome, email, password, role } = newUserData;
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
    if (role === '') {
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

  const cleanFields = () => {
    const name = document.getElementById('nome');
    name.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const password = document.getElementById('password');
    password.value = '';
    const role = document.getElementById('role');
    role.value = '';
    setNewUserData({ nome: '', email: '', password: '', role: '' });
  };

  const handleClick = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const result = await api.registerUserWithAdmin(newUserData, userData.token);
    if (result.error) {
      setErrorMessage(result.error.message);
    }
    cleanFields();
  };

  const errorDivMessage = (
    <div>
      <p data-testid={ dataTestIds[75] }>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage() }
      >
        OK
      </button>
    </div>
  );

  const options = ['customer', 'seller', 'administrator'];
  return (
    <main>
      <section>
        <p>Cadastrar novo usuário</p>
        <TextInput
          type="text"
          name="nome"
          onChange={ handleChange }
          labelText="Nome"
          placeholderText="Nome completo"
          dataTestId={ dataTestIds[65] }
        />
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="Email"
          placeholderText="email@email.com"
          dataTestId={ dataTestIds[66] }
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="senha"
          dataTestId={ dataTestIds[78] }
        />
        <DropDownList
          options={ options }
          name="role"
          dataTestId={ dataTestIds[68] }
          onChange={ handleChange }
          isHidden="true"
        />
        <LargeButton
          buttonText="CADASTRAR"
          onClick={ handleClick }
          isDisabled={ disableButton }
          dataTestId={ dataTestIds[69] }
        />
        { errorMessage && errorDivMessage }
      </section>
      <section>
        <p>Aqui fica a lista de usuarios</p>
      </section>
    </main>
  );
}

export default Admin;

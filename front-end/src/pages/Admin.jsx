import React, { useState, useEffect } from 'react';
import api from '../services/api';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import DropDownList from '../components/DropDownList';

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
    const userData = JSON.parse(localStorage.getItem('userData'));
    const result = await api.registerUserWithAdmin(newUserData, userData.token);
    if (result.error) {
      setErrorMessage(result.error.message);
    }
    cleanFields();
  };

  const errorDivMessage = (
    <div>
      <p data-testid="admin_manage__element-invalid-register">{ errorMessage }</p>
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
          dataTestId="admin_manage__input-name"
        />
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="Email"
          placeholderText="email@email.com"
          dataTestId="admin_manage__input-email"
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="senha"
          dataTestId="admin_manage__input-password"
        />
        <DropDownList
          options={ options }
          name="role"
          dataTestId="admin_manage__select-role"
          onChange={ handleChange }
        />
        <LargeButton
          buttonText="CADASTRAR"
          onClick={ handleClick }
          isDisabled={ disableButton }
          dataTestId="admin_manage__button-register"
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

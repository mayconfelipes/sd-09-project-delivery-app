import React, { useState, useEffect } from 'react';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import DropDownList from '../components/DropDownList';

function Admin() {
  const [newUserData, setNewUserData] = useState({
    nome: '', email: '', password: '', role: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  // const [errorMessage, setErrorMessage] = useState();

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

  const options = ['Customer', 'Seller', 'Admin'];
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
          onClick={ () => {} }
          isDisabled={ disableButton }
          dataTestId="admin_manage__button-register"
        />
      </section>
      <section>
        <p>Aqui fica a lista de usuarios</p>
      </section>
    </main>
  );
}

export default Admin;

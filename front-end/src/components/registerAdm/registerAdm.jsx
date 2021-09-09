import React, { useState } from 'react';
import { createNewUser } from '../../services/usersAPI';

function RenderRegister() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const canUserRegister = async () => {
    const registerBody = { name, email, password };
    const user = localStorage.getItem('user');
    const responseRegister = await createNewUser(registerBody, user.token);
    console.log(responseRegister);
    // if (responseRegister.message) {
    //   setError(true);
    //   const notMagicNumber = 3000;
    //   setTimeout(() => {
    //     setError(false);
    //   }, notMagicNumber);
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
      <p>Cadastrar novo usuario</p>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          canUserRegister();
        } }
      >
        <div>
          <div>
            <p>Nome</p>
            <input
              data-testid="admin_manage__input-name"
              type="text"
              placeholder="Escreva o nome aqui"
              value={ name }
              onChange={ (e) => {
                setName(e.target.value);
                isInputValid();
              } }
            />
          </div>
          <div>
            <p>Email</p>
            <input
              data-testid="admin_manage__input-email"
              type="email"
              placeholder="email@site.com.br"
              value={ email }
              onChange={ (e) => {
                setEmail(e.target.value);
                isInputValid();
              } }
            />
          </div>
          <div>
            <p>Senha</p>
            <input
              data-testid="admin_manage__input-password"
              type="password"
              placeholder="*********"
              value={ password }
              onChange={ (e) => {
                setPassword(e.target.value);
                isInputValid(e.target.value);
              } }
            />
          </div>
          <p>Tipo</p>
          <select data-testid="admin_manage__select-role">
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="adm">Administrador</option>
          </select>
          <button
            data-testid="admin_manage__button-register"
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

export default RenderRegister;

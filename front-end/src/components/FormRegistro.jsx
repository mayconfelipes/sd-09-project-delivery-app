import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import validators from '../utils/registrationValidation';
import status from '../utils/status';

const ROLE_CHOICES = [
  {
    value: 'customer',
    name: 'Cliente',
  },
  {
    value: 'seller',
    name: 'Vendedor',
  },
  {
    value: 'administrator',
    name: 'Administrador',
  },
];

const INITAL_FORM = {
  name: '',
  email: '',
  password: '',
  role: 'customer',
};

export default function FormRegistro() {
  const [user, setUser] = useState(INITAL_FORM);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const renderDropdownRoles = () => (
    <label htmlFor="role-input">
      Tipo
      <select
        name="role"
        id="role-input"
        className="form-control"
        onChange={ (e) => handleChange(e) }
        data-testid="admin_manage__select-role"
      >
        {
          ROLE_CHOICES.map(({ name, value }, index) => (
            <option value={ value } key={ index + value }>
              { name }
            </option>
          ))
        }
      </select>
    </label>
  );

  const handleUserRegistration = async () => {
    const POST_USER_ENDPOINT = 'http://localhost:3001/api/users/register';
    // const config = {
    //   headers: { Authorization: `${token}` },
    // };
    console.log(user);

    await axios.post(POST_USER_ENDPOINT, user)
      .then(
        (response) => {
          console.log(response);
          setUser(INITAL_FORM);
          if (error) setError('');
        },
        ({ response: { status: errorStatus } }) => {
          if (errorStatus === status.HTTP_401_UNAUTHORIZED) {
            return (<Redirect
              to={ {
                pathname: '/login',
                state: {
                  error: 'Sessão expirada',
                },
              } }
            />);
          } if (errorStatus === status.HTTP_409_CONFLICT) {
            setError('Usuário já cadastrado.');
          } else {
            setError('Falha ao listar usuários.');
          }
        },
      );
  };

  return (
    <section>
      <h1>Cadastrar novo usuário</h1>
      {
        error.length > 0
        && <span>{ error }</span>
      }
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
            id="name-input"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            placeholder="Nome e sobrenome"
            name="email"
            id="email-input"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="Nome e sobrenome"
            name="password"
            id="password-input"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        { renderDropdownRoles() }
        <button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ handleUserRegistration }
          disabled={ !validators.isValid(user) }
        >
          CADASTRAR
        </button>
      </form>
    </section>
  );
}

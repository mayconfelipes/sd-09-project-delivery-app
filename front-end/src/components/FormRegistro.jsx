import React, { useState, useContext } from 'react';
import { string } from 'prop-types';
import { Redirect } from 'react-router';
import axios from 'axios';

import UsersContext from '../context/UsersContext';
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

export default function FormRegistro({ token }) {
  const { addUser } = useContext(UsersContext);

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
    const config = {
      headers: { Authorization: `${token}` },
    };

    await axios.post(POST_USER_ENDPOINT, user, config)
      .then(
        ({ data: { user: newUser } }) => {
          if (error) setError('');
          addUser(newUser);
          setUser(INITAL_FORM);
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
        && <span data-testid="admin_manage__element-invalid-register">{ error }</span>
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
            placeholder="email@example.com"
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
            placeholder="******"
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

FormRegistro.propTypes = {
  token: string.isRequired,
};

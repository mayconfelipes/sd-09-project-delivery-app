import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import { string } from 'prop-types';
import axios from 'axios';

import UsersContext from '../context/UsersContext';
import status from '../utils/status';

const ROLE_CHOICES = {
  customer: 'Cliente',
  seller: 'P. Vendedora',
  administrator: 'Administrador',
};

export default function ListaUsers({ token }) {
  const config = {
    headers: { Authorization: `${token}` },
  };

  const { users, addUser, removeUser } = useContext(UsersContext);

  const [isFirstFecth, setFirstFetch] = useState(true);
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleRequestError = (errorStatus, message) => {
    if (errorStatus === status.HTTP_401_UNAUTHORIZED) {
      setRedirect(true);
    } else {
      setError(message);
    }
  };

  useEffect(
    () => {
      const GET_USERS_ENDPOINT = 'http://localhost:3001/api/users';

      const fetchUsers = async () => {
        await axios.get(GET_USERS_ENDPOINT, config)
          .then(
            ({ data }) => {
              const filteredUsers = data.filter(({ role }) => role !== 'administrator');
              if (filteredUsers.length !== users.length) addUser(...filteredUsers);
              setFirstFetch(false);
            },
            ({ response: { status: errorStatus } }) => (
              handleRequestError(errorStatus, 'Falha ao listar usuários')
            ),
          );
      };
      if (isFirstFecth) {
        fetchUsers();
      }
    }, [addUser, config, isFirstFecth, token, users],
  );

  const handleDeletion = async (id) => {
    const DELETE_USER_ENDPOINT = `http://localhost:3001/api/users/${id}`;

    await axios.delete(DELETE_USER_ENDPOINT, config)
      .then(
        () => removeUser(id),
        ({ response: { status: errorStatus } }) => (
          handleRequestError(errorStatus, 'Falha ao remover usuários')
        ),
      );
  };

  if (redirect) {
    return (<Redirect
      to={ {
        pathname: '/login',
        state: {
          error: 'Sessão expirada',
        },
      } }
    />);
  }

  return (
    <section>
      <h2>Lista de usuários</h2>
      {
        error.length > 0
        && <span>{ error }</span>
      }
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(({ name, email, role, id }, index) => (
              <tr key={ email }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  { name }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  { email }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  { ROLE_CHOICES[role] }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  <button
                    type="button"
                    onClick={ () => handleDeletion(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

ListaUsers.propTypes = {
  token: string.isRequired,
};

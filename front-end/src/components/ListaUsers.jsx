import React, { useState, useEffect } from 'react';
import { string, number } from 'prop-types';
import axios from 'axios';

const ROLE_CHOICES = {
  customer: 'Cliente',
  seller: 'P. Vendedora',
  administrator: 'Administrador',
};

export default function ListaUsers({ token, userId }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(
    () => {
      const GET_USERS_ENDPOINT = 'http://localhost:3001/api/users';
      const config = {
        headers: { Authorization: `${token}` },
      };

      const fetchUsers = async () => {
        await axios.get(GET_USERS_ENDPOINT, config)
          .then(
            ({ data }) => {
              const filteredUsers = data.filter(({ id }) => id !== userId);
              setUsers(filteredUsers);
            },
            () => setError('Falha ao listar usuários.'),
          );
      };
      fetchUsers();
    }, [token, userId],
  );

  return (
    <section>
      <h2>Lista de usuários</h2>
      {
        error.length > 0
        || <span>{ error }</span>
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
            users.map(({ name, email, role }, index) => (
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
                  Excluir
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
  userId: number.isRequired,
};

import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { getUsers, deleteUser } from '../../services/api';

const route = 'admin_manage';

function ManageUserTable() {
  const [users, setUsers] = useState([]);

  const fetchData = () => getUsers().then((data) => setUsers(data));

  useEffect(() => fetchData(), []);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        { users.map(({ id, name, email, role }, index) => (
          <tr key={ id }>
            <td data-testid={ `${route}__element-user-table-item-number-${index}` }>
              { index + 1 }
            </td>
            <td data-testid={ `${route}__element-user-table-name-${index}` }>
              { name }
            </td>
            <td data-testid={ `${route}__element-user-table-email-${index}` }>
              { email }
            </td>
            <td data-testid={ `${route}__element-user-table-role-${index}` }>
              { role }
            </td>
            <td>
              <button
                data-testid={ `${route}__element-user-table-remove-${index}` }
                type="button"
                onClick={ () => deleteUser(id).then(() => fetchData()) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ManageUserTable;

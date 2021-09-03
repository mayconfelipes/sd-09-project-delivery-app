import React from 'react';
import { arrayOf, func } from 'prop-types';

const route = 'admin_manage';

function ManageUserTable({ users, removeUser }) {
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
                onClick={ () => removeUser(id) }
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

ManageUserTable.propTypes = {
  users: arrayOf,
  removeUser: func,
}.isRequired;

export default ManageUserTable;

import React from 'react';
import PropTypes from 'prop-types';

function AdminUsersItem({ user, index, removeUser }) {
  const { id, name, email, role } = user;

  const textRole = () => {
    if (role === 'customer') return 'Cliente';
    if (role === 'seller') return 'P. Vendedora';
    if (role === 'administrator') return 'P. Administradora';
  };

  return (
    <tr>
      <td
        className="admin-user-item"
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        className="admin-user-name"
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        { name }
      </td>
      <td
        className="admin-user-email"
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        { email }
      </td>
      <td
        className="admin-user-role"
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        { textRole() }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-remove-${index}` }
      >
        <button
          className="admin-remove-user-button"
          type="button"
          onClick={ () => removeUser(id) }
        >
          EXCLUIR
        </button>
      </td>
    </tr>
  );
}

AdminUsersItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default AdminUsersItem;

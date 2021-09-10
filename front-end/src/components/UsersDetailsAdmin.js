import React from 'react';
import PropTypes from 'prop-types';

import fetchDELETE from '../services/fetchDELETE';
import socket from '../utils/socket';
import '../styles/FormAdmin.css';

class UsersDetailsAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  async deleteUser() {
    const { user: { id } } = this.props;
    await fetchDELETE(`users/${id}`);
    socket.emit('deleteUser');
  }

  render() {
    const {
      user: { name, email, role },
      indexUser,
    } = this.props;

    return (
      <tr>
        <td
          className="item-admin"
          data-testid={ `admin_manage__element-user-table-item-number-${indexUser}` }
        >
          { indexUser + 1 }
        </td>
        <td
          className="name-admin"
          data-testid={ `admin_manage__element-user-table-name-${indexUser}` }
        >
          { name }
        </td>
        <td
          className="email-admin"
          data-testid={ `admin_manage__element-user-table-email-${indexUser}` }
        >
          { email }
        </td>
        <td
          className="tipo-admin"
          data-testid={ `admin_manage__element-user-table-role-${indexUser}` }
        >
          { role }
        </td>
        <td
          className="button-admin"
          data-testid={ `admin_manage__element-user-table-remove-${indexUser}` }
        >
          <button
            className="button-delete"
            type="button"
            onClick={ this.deleteUser }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

UsersDetailsAdmin.propTypes = ({
  user: PropTypes.objectOf,
}).isRequired;

export default UsersDetailsAdmin;

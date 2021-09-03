import React from 'react';
import PropTypes from 'prop-types';

import fetchDELETE from '../services/fetchDELETE';
import socket from '../utils/socket';

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
          data-testid={ `admin_manage__element-user-table-item-number-${indexUser}` }
        >
          { indexUser + 1 }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-name-${indexUser}` }
        >
          { name }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-email-${indexUser}` }
        >
          { email }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-role-${indexUser}` }
        >
          { role }
        </td>
        <td
          data-testid={ `admin_manage__element-user-table-remove-${indexUser}` }
        >
          <button
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

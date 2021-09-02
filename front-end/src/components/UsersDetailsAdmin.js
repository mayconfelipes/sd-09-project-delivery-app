import React from 'react';
import PropTypes from 'prop-types';

import fetchDELETE from '../services/fetchDELETE';

class UsersDetailsAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.removeUser = this.removeUser.bind(this);
  }

  async removeUser() {
    const { id } = this.props;
    await fetchDELETE(`users/${id}`);
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
          data-testid={ `admin_manage__element-user-table-email${indexUser}` }
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
            onClick={ this.removeUser }
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

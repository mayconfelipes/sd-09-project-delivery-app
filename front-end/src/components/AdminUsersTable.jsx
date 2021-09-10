import React from 'react';
import PropTypes from 'prop-types';
import AdminUsersItem from './AdminUsersItem';

function AdminUsersTable({ users, removeUser }) {
  const tableHead = () => (
    <thead>
      <tr>
        <th>Item</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>
    </thead>
  );

  return (
    <table>
      <colgroup>
        <col width="40px" />
        <col />
        <col width="310px" />
        <col width="150px" />
        <col width="150px" />
      </colgroup>
      { tableHead() }
      <tbody>
        { users.map((user, index) => (
          <AdminUsersItem
            user={ user }
            index={ index }
            removeUser={ removeUser }
            key={ index }
          />)) }
      </tbody>
    </table>
  );
}

AdminUsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default AdminUsersTable;

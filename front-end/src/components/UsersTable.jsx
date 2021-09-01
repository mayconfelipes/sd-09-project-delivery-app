import React from 'react';
import PropTypes from 'prop-types';
import dataTestIds from '../utils/dataTestIds';

function UsersTable({ list, handleRemove }) {
  const userTypes = {
    customer: 'Cliente',
    seller: 'P.Vendedora',
    administrator: 'Administrador',
  };

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
        { list.map((user, index) => (
          <tr key={ index }>
            <td data-testid={ `${dataTestIds[70]}${index}` }>{ index + 1 }</td>
            <td data-testid={ `${dataTestIds[71]}${index}` }>{ user.name }</td>
            <td data-testid={ `${dataTestIds[72]}${index}` }>{ user.email }</td>
            <td data-testid={ `${dataTestIds[73]}${index}` }>{ userTypes[user.role] }</td>
            <td>
              <button
                data-testid={ `${dataTestIds[74]}${index}` }
                type="button"
                value={ user.id }
                onClick={ handleRemove }
              >
                Excluir
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default UsersTable;

import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'admin_manage';

function ManageUserTable() {
  return (
    <section>
      <h1>TABELA DE USUARIOS</h1>
      <p data-testid={ `${route}__element-user-table-item-number-${id}` }>item-number</p>
      <p data-testid={ `${route}__element-user-table-name-${id}` }>name</p>
      <p data-testid={ `${route}__element-user-table-email-${id}` }>email</p>
      <p data-testid={ `${route}__element-user-table-role-${id}` }>role</p>
      <p data-testid={ `${route}__element-user-table-remove-${id}` }>remove</p>

    </section>
  );
}

export default ManageUserTable;

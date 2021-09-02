import React, { useState, useEffect } from 'react';

export default function ListaUsers() {
  const [users] = useState([]);

  useEffect(
    () => {

    }, [],
  );

  return (
    <section>
      Lista de usuários
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
                  { role }
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

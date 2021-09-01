import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [signupValues, setSignupValues] = useState({ name: '', email: '', password: '' });
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    const passwordLength = 6;
    const nameLengh = 12;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const { name, email, password } = signupValues;
    if (
      emailRegex.test(email)
      && name.length >= nameLengh
      && password.length >= passwordLength
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [signupValues.name, signupValues.email, signupValues.password, signupValues]);

  useEffect(() => {
    async function fetchUsers() {
      const request = await axios({
        method: 'get',
        url: 'http://localhost:3001/user',
      });
      const { data } = request;
      setUsers(data);
      console.log(users);
    }

    fetchUsers();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <nav className="admin-navbar">
        <div>
          <span className="page-title">GERENCIAR USUARIOS</span>
        </div>
        <div>
          <span className="page-title admin">
            Trybeer Admin
          </span>
          <button type="button" className="logout-btn">
            Sair
          </button>
        </div>
      </nav>
      <div className="admin-form">
        <fieldset>
          <legend>Cadastrar novo usuario</legend>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              className="input-element"
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              className="input-element"
              data-testid="admin_manage__input-email"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              className="input-element"
              data-testid="admin_manage__input-password"
            />
          </label>
          <select data-testid="admin_manage__select-role">
            <option value>Vendedor</option>
            <option value={ false }>Cliente</option>
          </select>
          <button
            type="button"
            className="sign-btn"
            data-testid="admin_manage__button-register"
            disabled={ disableBtn }
            onClick={ () => setSignupValues() }
          >
            Cadastrar
          </button>
        </fieldset>
        <p data-testid="admin_manage__element-invalid-register">Algo deu errado</p>
      </div>
      <main>
        <h2>Lista de usuarios</h2>
        <table>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
          {users.map(({ id, name, email, role }) => (
            <tr key={ id }>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td><button type="button" testId="admin_manage">Excluir</button></td>
            </tr>
          ))}
        </table>
      </main>
    </div>
  );
}

export default AdminDashboard;

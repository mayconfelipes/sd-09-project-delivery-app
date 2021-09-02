import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [signupValues, setSignupValues] = useState({
    name: '', email: '', password: '', role: 'seller' });
  const [newUser, setNewUser] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  function handleLocalState({ target }) {
    const { name, value } = target;
    setSignupValues((prevState) => ({ ...prevState, [name]: value }));
  }

  async function registerUser() {
    try {
      const { name, email, password, role } = signupValues;
      const { user } = JSON.parse(localStorage.getItem('user'));
      const request = await axios({
        method: 'post',
        url: 'http://localhost:3001/user/admin',
        headers: {
          Authorization: user.token,
        },
        data: {
          name,
          email,
          password,
          role,
        },
      });
      setNewUser(request.data);
      setSignupValues({ name: '', email: '', password: '', role: 'seller' });
      setFetchError(false);
    } catch (e) {
      setFetchError(true);
    }
  }

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
    }

    fetchUsers();
  }, [newUser]);
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
            {'\n'}
            <input
              type="text"
              name="name"
              className="input-element"
              value={ signupValues.name }
              data-testid="admin_manage__input-name"
              onChange={ (event) => handleLocalState(event) }
            />
          </label>
          <label htmlFor="email">
            Email
            {'\n'}
            <input
              type="text"
              name="email"
              className="input-element"
              value={ signupValues.email }
              data-testid="admin_manage__input-email"
              onChange={ (event) => handleLocalState(event) }
            />
          </label>
          <label htmlFor="password">
            Senha
            {'\n'}
            <input
              type="password"
              name="password"
              className="input-element"
              value={ signupValues.password }
              data-testid="admin_manage__input-password"
              onChange={ (event) => handleLocalState(event) }
            />
          </label>
          <select
            data-testid="admin_manage__select-role"
            onChange={ (event) => handleLocalState(event) }
            name="role"
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
          <button
            type="button"
            className="sign-btn"
            data-testid="admin_manage__button-register"
            disabled={ disableBtn }
            onClick={ registerUser }
          >
            Cadastrar
          </button>
        </fieldset>
        <p
          className={ `${fetchError ? '' : 'hide-message'}` }
          data-testid="admin_manage__element-invalid-register"
        >
          Algo deu errado no cadastro
        </p>
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
            <tr
              data-testid={ `admin_manage__element-user-table-item-number-${id}` }
              key={ id }
            >
              <td
                data-testid={ `admin_manage__element-user-table-itemNumber-${id}` }
              >
                {id}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${id}` }
              >
                {name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${id}` }
              >
                {email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${id}` }
              >
                {role}
              </td>
              <td>
                <button
                  type="button"
                  testId="admin_manage"
                  className="delete-btn"
                  data-testid={ `admin_manage__element-user-table-remove-${id}` }
                >
                  <em className="far fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </main>
    </div>
  );
}

export default AdminDashboard;

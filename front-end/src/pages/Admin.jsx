import React, { useEffect, useState } from 'react';
import { getUsers, createUser, deleteUser } from '../services/api/index';
import NavBar from '../components/NavBar';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRole] = useState('customer');
  const [createdUser, setCreatedUser] = useState(false);
  const [error, setError] = useState(false);
  const [disableButton, setDisable] = useState(true);
  const [deletedUser, setDeleteUser] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const { token, role, name } = user;

  const verifyInputs = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    const nameLength = 12;
    const isValidEmail = email.match(emailRegex);
    const isValidPass = password.length >= passwordLength;
    const isValidName = nome.length >= nameLength;

    if (isValidEmail && isValidPass && isValidName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = async () => {
    await createUser(token, { nome, email, password, rol }, setCreatedUser, setError);
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    await getUsers(token, setUsers);
  };

  const handleClickDeleteUser = async ({ target }) => {
    await deleteUser(token, target.id, setDeleteUser);
    await getUsers(token, setUsers);
  };

  const renderUserTable = () => {
    if (users !== undefined && users.length > 0) {
      return (
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
            { users.map((element, index) => (
              <tr key={ element.id }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {element.name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {element.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {element.role}
                </td>
                <td>
                  <button
                    type="button"
                    id={ element.id }
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    onClick={ handleClickDeleteUser }
                  >
                    X
                  </button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      );
    }
  };

  const renderForm = () => (
    <div className="userForm">
      <span>Nome</span>
      <input
        type="text"
        data-testid="admin_manage__input-name"
        id="name"
        value={ nome }
        onChange={ ({ target }) => { setName(target.value); } }
      />
      <span>Email</span>
      <input
        type="text"
        data-testid="admin_manage__input-email"
        id="email"
        value={ email }
        onChange={ ({ target }) => { setEmail(target.value); } }
      />
      <span>Senha</span>
      <input
        type="password"
        id="password"
        data-testid="admin_manage__input-password"
        value={ password }
        onChange={ ({ target }) => { setPassword(target.value); } }
      />
      <span>Tipo </span>
      <select
        id="role"
        value={ rol }
        onChange={ ({ target }) => setRole(target.value) }
        data-testid="admin_manage__select-role"
      >
        <option value="customer">Cliente</option>
        <option value="seller">Vendedor</option>
        <option value="administrator">Administrador</option>
      </select>

      <button
        type="button"
        disabled={ disableButton }
        onClick={ handleClick }
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </div>

  );

  useEffect(() => {
    verifyInputs();
  }, [nome, rol, email, password]);

  useEffect(() => {
    getUsers(token, setUsers);
  }, [createdUser, deletedUser]);

  const renderErro = () => (
    <p
      data-testid="admin_manage__element-invalid-register"
    >
      Usuário já existe
    </p>
  );

  return (
    <div className="">
      <NavBar
        userType={ role }
        userName={ name }
      />
      { renderForm() }
      { createdUser && <p>Usuário Criado</p>}
      { error && renderErro() }
      { renderUserTable() }
    </div>
  );
};

export default Admin;

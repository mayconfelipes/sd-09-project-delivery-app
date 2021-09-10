import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import NavBarAdmin from '../components/navBarAdmin';
import '../styles/Admin.css';
import * as api from '../services/api';
import AdminUsersTable from '../components/AdminUsersTable';

io('http://localhost:3001');

function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [showInvalidRegisterError, setInvalidRegisterError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const getAllUsers = async () => {
    const admin = JSON.parse(localStorage.getItem('user'));
    let allUsers = await api.getAllUsers();
    allUsers = allUsers.filter((user) => user.email !== admin.email);
    setUsersList(allUsers);
    console.log(usersList);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    const magicNumber = 12;
    const passwordMinLength = 6;
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (emailRegex.test(email)
      && password.length >= passwordMinLength
      && name.length >= magicNumber) {
      return setIsValid(true);
    }
    setIsValid(false);
  }, [name, email, password, role]);

  const showInvalidRegisterMessage = (message) => {
    const errorMessageTimeout = 2000;
    setInvalidRegisterError(message);
    setTimeout(() => setInvalidRegisterError(''), errorMessageTimeout);
  };

  const registerUser = async () => {
    try {
      const userObject = { name, email, password, role };
      const user = JSON.parse(localStorage.getItem('user'));
      await api.registerUserByAdmin(userObject, user.token);
      await getAllUsers();
    } catch (error) {
      showInvalidRegisterMessage(error.message);
    }
  };

  const removeUser = async (userId) => {
    const admin = JSON.parse(localStorage.getItem('user'));
    await api.deleteUser(userId, admin.token);
    await getAllUsers();
  };

  return (
    <div className="admin-page">
      <NavBarAdmin />

      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            onChange={ (e) => setName(e.target.value) }
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            id="senha"
            placeholder="******"
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
            data-testid="admin_manage__input-password"
          />
        </label>

        <label htmlFor="tipo">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="administrator">Administrador</option>
            <option value="seller" selected="selected">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          type="button"
          disabled={ !isValid }
          onClick={ () => registerUser() }
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>

      </form>
      <p data-testid="admin_manage__element-invalid-register">
        { showInvalidRegisterError }
      </p>
      <AdminUsersTable users={ usersList } removeUser={ removeUser } />
    </div>
  );
}

export default Admin;

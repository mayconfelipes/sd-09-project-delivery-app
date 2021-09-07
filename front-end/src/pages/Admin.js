import React from 'react';
import Header from '../components/Header';

const Admin = () => (
  <div>
    <Header />
    <h3>Cadastrar novo usuário</h3>
    <form>
      <label htmlFor="userName">
        Nome
        <input
          id="userName"
          name="userName"
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
        />
      </label>
      <label htmlFor="userEmail">
        Email
        <input
          id="userEmail"
          name="userEmail"
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="userPassword">
        Senha
        <input
          id="userPassword"
          name="userPassword"
          data-testid="admin_manage__input-password"
        />
      </label>
      <label htmlFor="userRole">
        Tipo
        <select
          id="userRole"
          name="userRole"
          data-testid="admin_manage__select-role"
        >
          <option key="seller" value="seller">Vendedor</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled
      >
        CADASTRAR
      </button>
    </form>
  </div>
);

export default Admin;

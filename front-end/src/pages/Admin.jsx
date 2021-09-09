import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import NavBarAdmin from '../components/navBarAdmin';

io('http://localhost:3001');

function Admin() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <NavBarAdmin />

      <h2>Cadastrar novo Usuário</h2>

      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            id="senha"
            placeholder="******"
            type="password"
            data-testid="admin_manage__input-password"
          />
        </label>

        <label htmlFor="tipo">
          Tipo
          <select data-testid="admin_manage__select-role">
            <option value="administrator">Administrador</option>
            <option value="seller" selected="selected">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>

      <button
        type="button"
        onClick={ () => socketRef.current.emit('teste', { teste: 'Olá' }) }
      >
        Teste
      </button>
    </div>
  );
}

export default Admin;

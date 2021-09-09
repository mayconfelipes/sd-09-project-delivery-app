import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import NavBarAdmin from '../components/navBarAdmin';

io('http://localhost:3001');

function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isValid, setIsValid] = useState(false);

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
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Admin;

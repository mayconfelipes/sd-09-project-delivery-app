import React, { useState } from 'react';

const ROLE_CHOICES = [
  {
    value: 'client',
    name: 'Cliente',
  },
  {
    value: 'seller',
    name: 'Vendedor',
  },
  {
    value: 'administrator',
    name: 'Administrador',
  },
];

export default function FormRegistro() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const renderDropdownRoles = () => (
    <label htmlFor="role-input">
      Tipo
      <select
        name="role"
        id="role-input"
        className="form-control"
        onChange={ (e) => handleChange(e) }
      >
        {
          ROLE_CHOICES.map(({ name, value }, index) => (
            <option value={ value } key={ index + value }>
              { name }
            </option>
          ))
        }
      </select>
    </label>
  );

  return (
    <section>
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
            id="name-input"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="email"
            placeholder="Nome e sobrenome"
            name="email"
            id="email-input"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="Nome e sobrenome"
            name="password"
            id="password-input"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        { renderDropdownRoles() }
        <button type="button">CADASTRAR</button>
      </form>
    </section>
  );
}

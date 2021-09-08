import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useRegister from '../hooks/useRegister';
import useRegisterInputs from '../hooks/utils/useRegisterInputs';

const Admin = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [setRegister, register] = useRegister();
  const [validInputs, validateInputs] = useRegisterInputs();

  useEffect(() => {
    if (register.register) {
      history.push('/customer/products');
    }
  }, [register, history]);

  useEffect(() => {
    if (name !== '' && email !== '' && password !== '' && role !== '') {
      validateInputs(name, email, password);
    }
  }, [name, email, password, role, validateInputs]);

  function handleRegister() {
    setRegister({ name, email, password, role });
  }

  return (
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
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="userEmail">
          Email
          <input
            id="userEmail"
            name="userEmail"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="userPassword">
          Senha
          <input
            id="userPassword"
            name="userPassword"
            type="password"
            placeholder="●●●●●●"
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <label htmlFor="userRole">
          Tipo
          <select
            id="userRole"
            name="userRole"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target: { value } }) => setRole(value) }
          >
            <option
              key="seller"
              value="seller"
              onClick={ ({ target }) => setRole(target.value) }
            >
              seller
            </option>
            <option
              key="customer"
              value="customer"
              onClick={ ({ target }) => setRole(target.value) }
            >
              customer
            </option>
            <option
              key="administrator"
              value="administrator"
              onClick={ ({ target }) => setRole(target.value) }
            >
              administrator
            </option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !validInputs }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
};

export default Admin;

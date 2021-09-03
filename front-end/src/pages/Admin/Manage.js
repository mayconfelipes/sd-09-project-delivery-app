import React, { useState, useEffect } from 'react';
import UsersTable from '../../components/Admin/ManageUserTable';
import Navbar from '../../components/Navbar';
import { createUser, getUsers, deleteUser } from '../../services/api';
import { createInput } from '../../utils/creators';
import { nameOptions, emailOptions, passwordOptions } from '../../data/InputOptions';

const route = 'admin_manage';
const INITIAL_STATE = { name: '', email: '', password: '', role: 'customer' };

function Manage() {
  const [state, setState] = useState(INITIAL_STATE);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const options = ['customer', 'seller', 'administrator'];

  const fetchData = () => getUsers().then((data) => setUsers(data));

  const removeUser = (id) => deleteUser(id).then(() => fetchData());

  useEffect(() => fetchData(), []);

  const handleChange = ({ target: { id, value } }) => {
    setState({ ...state, [id]: value });
  };

  const onClick = async () => {
    const data = await createUser({ ...state });
    if (data.error) return setError(true);
    fetchData();
    return setError(false);
  };

  const checkFormats = () => {
    const nameFormat = /^[a-zA-ZÀ-ü ]{12}/g.test(state.name);
    const emailFormat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(state.email);
    const passwordFormat = /[\w\D]{6}/g.test(state.password);
    return nameFormat && emailFormat && passwordFormat;
  };

  return (
    <>
      <Navbar />
      { error && (
        <p data-testid={ `${route}__element-invalid-register` }>
          ERROR 409: E-mail já cadastrado
        </p>)}
      { createInput({ ...nameOptions, onChange: handleChange, route }) }
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      <select
        data-testid={ `${route}__select-role` }
        id="role"
        name="role"
        value={ state.value }
        onChange={ handleChange }
      >
        { options.map((e) => (
          <option key={ e } value={ e }>{ e }</option>))}
      </select>
      <button
        data-testid={ `${route}__button-register` }
        name="register"
        type="submit"
        onClick={ onClick }
        disabled={ !checkFormats() }
      >
        CADASTRAR
      </button>
      <UsersTable users={ users } removeUser={ removeUser } />
    </>
  );
}

export default Manage;

import React, { useState, useEffect } from 'react';
import { Navbar, AdminManageUserTable } from '../../components';
import { createUser, getUsers, deleteUser } from '../../services/api';
import { checkUser } from '../../utils/checkFormats';
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

  return (
    <section>
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
        disabled={ !checkUser(state) }
      >
        CADASTRAR
      </button>
      <AdminManageUserTable users={ users } removeUser={ removeUser } />
    </section>
  );
}

export default Manage;

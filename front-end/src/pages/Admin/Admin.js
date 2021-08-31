import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import connectBack from '../../utills/axiosConfig';

function Admin() {
  const [userName, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [isDisabled, trueOrFalse] = useState(true);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const prefix = 'admin_manage__';
  const passMin = 5;
  // const history = useHistory();

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(email)) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
  };

  const saveTokenLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userChange = ({ target }) => {
    setUser(target.value);
    verifyDisabled();
  };

  const passwordChange = ({ target }) => {
    setPassword(target.value);
    verifyDisabled();
  };
  const emailChange = ({ target }) => {
    setEmail(target.value);
    verifyDisabled();
  };

  const roleChange = ({ target }) => {
    setRole(target.value);
    verifyDisabled();
  };

  // const redirectCostummer = () => {
  //   '    if(userName ===  ) {';

  //   history.push('/customer/products');
  // };

  // const login = () => {
  //   connectBack
  //     .post('/login', { email, password })
  //     .then((response) => {
  //       console.log('LOGOU', response.data.user);
  //       saveTokenLocalStorage(response.data.user);
  //       redirectCostummer();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setInvalidLogin(true);
  //     });
  // };
  const registerUser = async () => {
    connectBack
      .post('/register', { email, password, name: userName, role })
      .then((response) => {
        console.log(response.data.user);
        saveTokenLocalStorage(response.data.user);
        // redirectCostummer();
      })
      .catch((error) => {
        console.log(error);
        // setInvalidLogin(true);
      });
  };
  return (
    <div className="login-Page">
      <input
        className="user_name_input"
        name="userName"
        value={ userName }
        data-testid={ `${prefix}input-name` }
        onChange={ userChange }
        placeholder="User Name"
      />
      <input
        className="email_input"
        name="email"
        value={ email }
        data-testid={ `${prefix}input-email` }
        onChange={ emailChange }
        placeholder="User Email"
      />
      <input
        className="password_input"
        name="password"
        data-testid={ `${prefix}input-password` }
        value={ password }
        onChange={ passwordChange }
        placeholder="Password"
      />
      <select
        className="role_input"
        name="role"
        data-testid={ `${prefix}select-role` }
        value={ role }
        onChange={ roleChange }
        placeholder="Role"
      >
        <option value="administrator">Administrador</option>
        <option value="seller">Vendedor</option>
        <option value="customer">Consumidor</option>
      </select>
      <div className="buttons">
        <button
          type="button"
          className="signin-button"
          data-testid={ `${prefix}button-register` }
          onClick={ registerUser }
          disabled={ isDisabled }
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Admin;

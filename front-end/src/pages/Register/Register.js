import React, { useState } from 'react';
import './Register.css';
import { useHistory } from 'react-router-dom';

import connectBack from '../../utills/axiosConfig';

function Register() {
  const [email, setUser] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, trueOrFalse] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  // const users = []

  const prefix = 'common_register__';
  const passMin = 5;
  const nameMin = 12;
  const history = useHistory();

  const saveTokenLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('products', JSON.stringify({}));
  };

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(email) && name.length >= nameMin) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
  };
  const emailChange = ({ target }) => {
    setUser(target.value);
    verifyDisabled();
  };

  const nameChange = ({ target }) => {
    setName(target.value);
    verifyDisabled();
  };

  const passwordChange = ({ target }) => {
    setPassword(target.value);
    verifyDisabled();
  };

  const redirectCostummer = () => {
    history.push('/customer/products');
  };

  const registerUser = async () => {
    connectBack.post('/register', { email, password, name })
      .then((response) => {
        saveTokenLocalStorage(response.data.user);
        redirectCostummer();
      })
      .catch((error) => {
        console.error(error);
        setInvalidLogin(true);
      });
  };

  return (
    <div className="login-Page">
      <input
        className="name-input"
        name="name"
        value={ name }
        data-testid={ `${prefix}input-name` }
        onChange={ nameChange }
        placeholder="Nome completo"
      />
      <input
        className="email-input"
        name="email"
        value={ email }
        data-testid={ `${prefix}input-email` }
        onChange={ emailChange }
        placeholder="Email do usuário"
      />
      <input
        className="password-input"
        name="password"
        data-testid={ `${prefix}input-password` }
        value={ password }
        onChange={ passwordChange }
        placeholder="Password"
      />
      <div className="buttons">
        <button
          type="button"
          className="signin-button"
          onClick={ registerUser }
          data-testid={ `${prefix}button-register` }
          disabled={ isDisabled }
        >
          REGISTER
        </button>
        {invalidLogin ? (
          <div data-testid={ `${prefix}element-invalid_register` }>
            REGISTRO INVALIDO
            {' '}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Register;

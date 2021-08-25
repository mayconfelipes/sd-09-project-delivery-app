import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

import socket from '../../utills/io';

function Login() {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, trueOrFalse] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const prefix = 'common_login__';
  const passMin = 5;
  const history = useHistory();

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(email)) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
  };

  const userChange = ({ target }) => {
    setUser(target.value);
    verifyDisabled();
  };

  const passwordChange = ({ target }) => {
    setPassword(target.value);
    verifyDisabled();
  };

  const redirectCostummer = () => {
    history.push('/costumer');
  };
  const login = () => {
    socket.emit('login', { email, password });
    socket.on('login', (data) => {
      if (!data) {
        setInvalidLogin(true);
        return null;
      }redirectCostummer();
    });
  };

  return (
    <div className="login-Page">
      <input
        className="email-input"
        name="email"
        value={ email }
        data-testid={ `${prefix}input-email` }
        onChange={ userChange }
        placeholder="User Email"
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
          onClick={ login }
          data-testid={ `${prefix}button-login` }
          disabled={ isDisabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          className="signup-button"
          data-testid={ `${prefix}button-register` }
        >
          Ainda não tenho conta
        </button>
        {invalidLogin
          ? <div data-testid={ `${prefix}element-invalid-email` }>LOGIN INVALIDO </div>
          : <div />}
      </div>
    </div>
  );
}

export default Login;

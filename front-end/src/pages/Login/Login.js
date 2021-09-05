import React, { useState, useEffect, useCallback } from 'react';
import './Forms.css';
import { useHistory } from 'react-router-dom';

import connectBack from '../../utills/axiosConfig';

function Login() {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, trueOrFalse] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const prefix = 'common_login__';
  const passMin = 5;
  const history = useHistory();

  const verifyIfIslogged = useCallback(() => {
    if (localStorage.getItem('user')) {
      history.push('/customer/products');
    }
  }, [history]);

  useEffect(() => {
    verifyIfIslogged();
  }, [verifyIfIslogged]);

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(email)) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
    setInvalidLogin(false);
  };

  const saveTokenLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('products', JSON.stringify({}));
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
    console.log(email);
    if (email === 'adm@deliveryapp.com') {
      history.push('/admin/manage');
    } else {
      history.push('/customer/products');
    }
  };
  const redirectRegister = () => {
    history.push('/register');
  };
  const login = () => {
    // connectBack.post('/login', { hasToken: false, method: 'POST', status: 404 })
    connectBack
      .post('/login', { email, password })
      .then((response) => {
        console.log('LOGOU', response.data.user);
        saveTokenLocalStorage(response.data.user);
        redirectCostummer();
      })
      .catch((error) => {
        console.log(error);
        setInvalidLogin(true);
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
          onClick={ redirectRegister }
        >
          Register
        </button>
        {invalidLogin ? (
          <div data-testid={ `${prefix}element-invalid-email` }>
            LOGIN INVALIDO
            {' '}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Login;

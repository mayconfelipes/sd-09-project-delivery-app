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
  const passMin = 6;
  const nameMin = 12;
  const history = useHistory();

  const verifyDisabled = () => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    if (password.length >= passMin && re.test(email) && name.length >= nameMin) {
      trueOrFalse(false);
    } else {
      trueOrFalse(true);
    }
  };

  const userChange = ({ target }) => {
    if (target.name === 'email') {
      setUser(target.value);
      verifyDisabled();
    }
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
  const redirectLogin = () => {
    history.push('/login');
  };

  const login = async () => {
    // connectBack.post('/login', { hasToken: false, method: 'POST', status: 404 })
    // connectBack.post('/login', { email, password })
    //   .then(({ data }) => {
    //     if (data === false) {
    //       setInvalidLogin(true);
    //       return null;
    //     }
    //     console.log(data);
    //     redirectCostummer();
    //   });
    const response = await connectBack.post('/register', { email, password, name });
    console.log(response, 'response do connect');
    if (response.data === false) {
      setInvalidLogin(true);
      return null;
    }
    redirectCostummer();
  };

  return (
    <div className="login-Page">
      <input
        className="name-input"
        name="name"
        value={ name }
        data-testid={ `${prefix}input-name` }
        onChange={ userChange }
        placeholder="Nome completo"
      />
      <input
        className="email-input"
        name="email"
        value={ email }
        data-testid={ `${prefix}input-email` }
        onChange={ userChange }
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
          onClick={ login }
          data-testid={ `${prefix}button-login` }
          disabled={ isDisabled }
        >
          REGISTER
        </button>
        <button
          type="button"
          className="signup-button"
          data-testid={ `${prefix}button-register` }
          onClick={ redirectLogin }
        >
          Já tenho conta
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

export default Register;

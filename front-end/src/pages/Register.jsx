import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import * as api from '../services/api';

function Register() {
  const { setUserInfo } = useContext(ProductsContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [showInvalidInfoError, setInvalidInfoError] = useState('');

  const history = useHistory();
  const errorMessageTimeout = 2000;

  useEffect(() => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordMinLength = 6;
    const nameMinLength = 12;

    if (emailRegex.test(email)
    && password.length >= passwordMinLength
    && name.length >= nameMinLength) {
      return setValid(true);
    }
    setValid(false);
  }, [email, password, name, showInvalidInfoError]);

  const showUserAlreadyRegistered = (message) => {
    setInvalidInfoError(message);
    setTimeout(() => setInvalidInfoError(''), errorMessageTimeout);
  };

  const registerNewUser = async () => {
    try {
      const { data } = await api.registerUser(name, email, password);
      localStorage.setItem('user', JSON.stringify(data));
      setUserInfo(data);
      history.push('/customer/products');
    } catch (error) {
      showUserAlreadyRegistered('User already registered');
    }
  };

  return (
    <div className="register-page">
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name-input"
            data-testid="common_register__input-name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            name="email-input"
            data-testid="common_register__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password-input"
            data-testid="common_register__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ !valid }
          onClick={ () => registerNewUser() }
        >
          CADASTRAR
        </button>
      </form>
      <p
        className="register-error-message"
        data-testid="common_register__element-invalid_register"
      >
        { showInvalidInfoError }
      </p>
    </div>
  );
}

export default Register;

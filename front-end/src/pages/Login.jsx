import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import TextInput from '../components/TextInput';
import LargeButton from '../components/LargeButton';
import logoDelivery from '../images/logo-delivery.png';
import api from '../services/api';
import dataTestIds from '../utils/dataTestIds';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [disableButton, setDisableButton] = useState(true);
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  const verifyLoginCredentials = () => {
    const { email, password } = loginData;
    const minPasswordLength = 6;
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if (!emailRegex.test(email)) {
      setDisableButton(true);
      return;
    }
    if (password.length < minPasswordLength) {
      setDisableButton(true);
      return;
    }
    setDisableButton(false);
  };

  useEffect(() => {
    verifyLoginCredentials();
  }, [loginData]);

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const history = useHistory();

  const handleClick = async () => {
    const result = await api.loginUser(loginData);
    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(result));
      switch (result.role) {
      case 'administrator':
        history.push('/admin/manage');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      default:
        history.push('/customer/products');
        break;
      }
    }
  };

  const errorDivMessage = (
    <div>
      <p data-testid={ dataTestIds[5] }>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage() }
      >
        Tentar novamente
      </button>
    </div>
  );

  return (
    <main>
      <section>
        <img
          style={ { height: '200px', width: '200px' } }
          src={ logoDelivery }
          alt="app logo"
        />
        <h1>Delivery</h1>
      </section>
      <section>
        <TextInput
          type="text"
          name="email"
          onChange={ handleChange }
          labelText="Login"
          placeholderText="email@appdelivery.com.br"
          dataTestId={ dataTestIds[1] }
        />
        <TextInput
          type="password"
          name="password"
          onChange={ handleChange }
          labelText="Senha"
          placeholderText="************"
          dataTestId={ dataTestIds[2] }
        />
        <LargeButton
          buttonText="LOGIN"
          isDisabled={ disableButton }
          onClick={ handleClick }
          dataTestId={ dataTestIds[3] }
        />
        <Link to="/register">
          <LargeButton
            buttonText="Ainda não tenho conta"
            onClick={ () => {} }
            dataTestId={ dataTestIds[4] }
          />
        </Link>
      </section>
      { errorMessage && errorDivMessage }
    </main>
  );
}

export default Login;

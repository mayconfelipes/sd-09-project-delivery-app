import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import api from '../../service/axiosApi';
import NotFound from '../../components/NotFound/index';
import { useDeliveryContext } from '../../context/deliveryProvider';
import './Login.css';
import logo from '../../images/logo.png';

const Login = () => {
  const [isError, setError] = useState();
  const [redirect, setRedirect] = useState();
  const [isDataValid, setIsDataValid] = useState(true);
  const [route, setRoute] = useState('');
  const { userData, setUserData } = useDeliveryContext();
  const history = useHistory();

  function handleInputChange({ target }) {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('user'))) return;
    const { role } = JSON.parse(localStorage.getItem('user'));

    if (role === 'customer') setRoute('/customer/products');
    if (role === 'seller') setRoute('/seller/orders');
    if (role === 'administrator') setRoute('/admin/manage');
    setRedirect(true);
  }, [route]);

  useEffect(() => {
    const { email, password } = userData;
    const emailValidated = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);
    const passwordRegex = new RegExp(/[\w\D]{6}/g).test(password);

    if (emailValidated && passwordRegex) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [userData]);

  const RedirectRole = ({ role }) => {
    if (role === 'customer') setRoute('/customer/products');

    if (role === 'seller') setRoute('/seller/orders');

    if (role === 'administrator') setRoute('/admin/manage');
  };

  const handleError = async () => {
    const data = userData;
    try {
      await api.post('/login', data).then((response) => {
        RedirectRole(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      });
      setRedirect(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <form className="px-5 py-7 login-container">
        <img src={ logo } alt="Motocicleta de entrega" />
        <h1 className="login-title">Telivery</h1>
        <section>
          <label htmlFor="input-email" className="label-email">
            E-mail
            <input
              type="text"
              name="email"
              className="input-email"
              onChange={ handleInputChange }
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="label-password" className="label-password">
            Password
            <input
              type="text"
              name="password"
              className="input-password"
              onChange={ handleInputChange }
              data-testid="common_login__input-password"
            />
          </label>
        </section>
        <div className="buttons-login-container">
          <button
            type="button"
            name="login"
            className="login-button"
            data-testid="common_login__button-login"
            disabled={ isDataValid }
            onClick={ () => handleError() }
          >
            Login
          </button>
          <button
            type="button"
            name="register"
            data-testid="common_login__button-register"
            className="register-button"
            onClick={ () => history.push('./register') }
          >
            Register
          </button>
        </div>
      </form>
      { isError && <NotFound /> }
      { redirect && <Redirect to={ route } /> }
    </>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../service/axiosApi';
import NotFound from '../../components/notFound';

const Login = () => {
  const [isError, setError] = useState();
  const [redirect, setRedirect] = useState();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);

  function handleInputChange({ target }) {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  }

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

  const handleError = async () => {
    const data = userData;
    try {
      await api.post('/login', data);
      setRedirect(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <form className="px-5 py-7">
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
        <Link to="/register">
          <button
            type="button"
            name="register"
            data-testid="common_login__button-register"
            className="register-button"
          >
            Register
          </button>
        </Link>
      </form>
      {isError && <NotFound />}
      {redirect && <Redirect to="customer/products" /> }
    </>
  );
};

export default Login;

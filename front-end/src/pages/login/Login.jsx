import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/loginAPI';
import GlobalContext from '../../context/GlobalContext';

function Login() {
  const { productsList, setProductsList } = useContext(GlobalContext);
  const [isValidFields, setIsValidFields] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordminLength = 6;
  const history = useHistory();

  useEffect(() => {
    const isDisabled = email.match(/\S+@\S+\.\S+/)
      && password.length >= passwordminLength;

    setIsButtonDisabled(!isDisabled);
  }, [email, password]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await API.fetchProducts();
      setProductsList(data);
    }
    if (productsList.length === 0) {
      fetchProducts();
    }
  }, [productsList, setProductsList]);

  const canUserLogin = async () => {
    const loginBody = { email, password };
    const responseLogin = await API.loginAPI(loginBody);
    if (responseLogin.message === 'Invalid fields') {
      return setIsValidFields(false);
    }
    console.log(responseLogin);
    if (responseLogin.token) {
      localStorage.setItem('userData', JSON.stringify(responseLogin));
      history.push('/customer/products');
    }
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        canUserLogin();
      } }
    >
      {!isValidFields ? (
        <div data-testid="common_login__element-invalid-email">
          <p>Email ou senha incorreto</p>
        </div>
      ) : null}
      <div className="login-input">
        <label htmlFor="email">
          Login:
          <input
            type="email"
            name="email"
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_login__input-email"
            placeholder="exemplo@exemplo.com"
            required
          />
        </label>
      </div>
      <div className="login-input">
        <label htmlFor="name">
          Senha
          <input
            type="password"
            name="password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_login__input-password"
            placeholder="***********"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        data-testid="common_login__button-login"
        disabled={ isButtonDisabled }
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        <a href="/register">AINDA NÃO TENHO CONTA</a>
      </button>
    </form>
  );
}

export default Login;

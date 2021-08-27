import React, { useState, useContext } from 'react';
import AppContext from '../hooks/context';

const axios = require('axios').default;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notFoundError, setNotFoundError] = useState(false);
  // const { signIn } = useContext(AppContext);

  const PASSWORD_LENGTH_EXPECTED = 6;

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      return setEmail(target.value);
    }

    return setPassword(target.value);
  };

  function validateEmail(emailValue) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(emailValue).toLowerCase());
  }

  const isValid = () => {
    const validatedEmail = validateEmail(email);
    const validatedPassword = password.length >= PASSWORD_LENGTH_EXPECTED;

    return validatedEmail && validatedPassword;
  };

  const createInput = (name, title) => (
    <div>
      <label htmlFor={ name }>{ title }</label>
      <input
        id={ name }
        name={ name }
        type={ name }
        onChange={ handleChange }
        data-testid={ `common_login__input-${name}` }
      />
    </div>
  );

  const loginFunction = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', {
      email,
      password,
    }).then((response) => {
      console.log(response);
    }).catch(() => {
      setNotFoundError(true);
    });
  };

  return (
    <div>
      <form>
        { createInput('email', 'Login') }
        { createInput('password', 'Senha') }
        <button
          type="submit"
          disabled={ !isValid() }
          onClick={ loginFunction }
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      {notFoundError
        ? <p data-testid="common_login__element-invalid-email">O usúario não existe</p>
        : null}
    </div>
  );
}

export default Login;

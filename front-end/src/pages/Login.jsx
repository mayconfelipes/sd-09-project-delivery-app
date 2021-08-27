import React, { useState } from 'react';

const axios = require('axios').default;

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [notFoundError, setNotFoundError] = useState(false);

  const PASSWORD_LENGTH_EXPECTED = 6;

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      return setEmailValue(target.value);
    }

    return setPasswordValue(target.value);
  };

  function validateEmail(email) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  const isValid = () => {
    const validatedEmail = validateEmail(emailValue);
    const validatedPassword = passwordValue.length >= PASSWORD_LENGTH_EXPECTED;

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
      email: emailValue,
      password: passwordValue,
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

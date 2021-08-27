import React, { useState } from 'react';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

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

  return (
    <div>
      <form>
        { createInput('email', 'Login') }
        { createInput('password', 'Senha') }
        <button
          type="submit"
          disabled={ !isValid() }
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
    </div>
  );
}

export default Login;

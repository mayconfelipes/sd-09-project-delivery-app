import React, { useState, useContext } from 'react';
import AppContext from '../hooks/context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AppContext);

  const PASSWORD_LENGTH_EXPECTED = 6;

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      return setEmail(target.value);
    }

    return setPassword(target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await signIn(email, password);
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

  return (
    <div>
      <form>
        { createInput('email', 'Login') }
        { createInput('password', 'Senha') }
        <button
          type="submit"
          disabled={ !isValid() }
          data-testid="common_login__button-login"
          onClick={ onSubmit }
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

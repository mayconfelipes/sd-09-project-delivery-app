import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//

const axios = require('axios').default;

function RegisterUser() {
  const [nameToRegister, setNameToRegister] = useState('');
  const [emailToRegister, setEmailToRegister] = useState('');
  const [passwordToRegister, setPasswordToRegister] = useState('');
  const router = useHistory();

  const PASSWORD_LENGTH_EXPECTED = 6;
  const NAME_LENGTH_EXPECTED = 12;

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      return setNameToRegister(target.value);
    }

    if (target.name === 'email') {
      return setEmailToRegister(target.value);
    }

    return setPasswordToRegister(target.value);
  };

  function validateEmail(emailValue) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(emailValue).toLowerCase());
  }

  const isValid = () => {
    const validatedEmail = validateEmail(emailToRegister);
    const validatedPassword = passwordToRegister.length >= PASSWORD_LENGTH_EXPECTED;
    const validatedName = nameToRegister.length >= NAME_LENGTH_EXPECTED;

    return validatedEmail && validatedPassword && validatedName;
  };

  const submitUser = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/register', {
      name: nameToRegister,
      email: emailToRegister,
      password: passwordToRegister,
    }).then((response) => {
      console.log(response);
      router.push('customer/products');
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <form>
        <h1>Cadastro</h1>
        <label htmlFor="name-input">
          <input
            type="text"
            id="name-input"
            name="name"
            onChange={ handleChange }
            data-testid="common_register__input-name"
            className="name-input"
            placeholder="Seu nome"
          />
        </label>
        <br />
        <label htmlFor="email-input">
          <input
            type="email"
            id="email-input"
            name="email"
            onChange={ handleChange }
            data-testid="common_register__input-email"
            className="email-input"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            name="password"
            onChange={ handleChange }
            data-testid="common_register__input-password"
            className="password-input"
            placeholder="**********"
          />
        </label>
        <br />
        <button
          className="button-register"
          type="button"
          onClick={ submitUser }
          disabled={ !isValid() }
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
        <p
          data-testid="common_register__element-invalid_register"
        >
          Elemento oculto (mensagem de erro)
        </p>
      </form>
    </div>
  );
}

export default RegisterUser;

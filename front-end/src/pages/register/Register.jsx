import React, { useState, useEffect } from 'react';
import api from '../../service/axiosApi';

import validateUserData from '../../helpers/validateUserData';

function Register() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    const dataIsValid = validateUserData(input);
    setBtnDisabled(!dataIsValid);
  }, [input]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const data = input;

    api.post('/register', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log('click!');
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            onChange={ handleInputChange }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            placeholder="seu-email@site.com"
            onChange={ handleInputChange }
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={ handleInputChange }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="submit"
          onClick={ handleInputSubmit }
          disabled={ btnDisabled }
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;

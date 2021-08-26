import React, { useState } from 'react';
// import axiosApi from '../../service/axiosApi';

function Register() {
  const [input, setInput] = useState({});

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleInputSubmit = () => {
    // axiosApi(input);
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
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="name"
            placeholder="seu-email@site.com"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            name="name"
            placeholder="********"
            onChange={ handleInputChange }
          />
        </label>
        <button type="submit" onClick={ handleInputSubmit }>Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;

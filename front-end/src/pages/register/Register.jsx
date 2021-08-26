import React, { useState } from 'react';

function Register() {
  const [input, setInput] = useState({});

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
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
            type="password"
            id="email"
            name="name"
            placeholder="seu-email@site.com"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            id="password"
            name="name"
            placeholder="********"
            onChange={ handleInputChange }
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;

import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" name="name" placeholder="Seu nome" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" name="name" placeholder="seu-email@site.com" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="text" id="password" name="name" placeholder="********" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;

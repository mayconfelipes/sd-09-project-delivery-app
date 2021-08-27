import React from 'react';

function register() {
  return (
    <div>
      <form>
        <h1>Cadastro</h1>
        <label htmlFor="name-input">
          <input
            type="text"
            id="name-input"
            name="name"
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
            name="name"
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
            data-testid="common_register__input-password"
            className="password-input"
            placeholder="**********"
          />
        </label>
        <br />
        <button
          className="button-register"
          type="button"
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

export default register;

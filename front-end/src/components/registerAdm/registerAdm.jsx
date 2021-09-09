import React from 'react';

const renderRegister = () => {
  <>
    <p>Cadastro</p>
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        canUserRegister();
      } }
    >
      <div>
        <div>
          <p>Nome</p>
          <input
            className={classes.input}
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Escreva o nome aqui"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              isInputValid();
            }}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="email@site.com.br"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              isInputValid();
            }}
          />
        </div>
        <div>
          <p>Senha</p>
          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              isInputValid(e.target.value);
            }}
          />
        </div>
        <label htmlFor="types">Tipo</label>
        <select data-testid="admin_manage__select-role" id="types">
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="adm">Administrador</option>
        </select>
        <button
          data-testid="admin_manage__button-register"
          disabled={isButtonDisabled}
          type="submit"
        >
          CADASTRAR
        </button>
      </div>
    </form>
  </>;
};

export default renderRegister;

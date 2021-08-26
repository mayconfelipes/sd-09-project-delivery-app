import React, { useEffect, useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [showInvalidInfoError, setInvalidInfoError] = useState('');

  const errorMessageTimeout = 2000;

  useEffect(() => {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const passwordMinLength = 6;
    const nameMinLength = 12;

    if (emailRegex.test(email)
    && password.length >= passwordMinLength
    && name.length >= nameMinLength) {
      return setValid(true);
    }
    setValid(false);
  }, [email, password, name, showInvalidInfoError]);

  const showUserAlreadyRegistered = () => {
    setInvalidInfoError('Alguma mensagem de erro');
    setTimeout(() => setInvalidInfoError(''), errorMessageTimeout);
  };

  return (
    <div className="register-page">
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name-input"
            data-testid="common_register__input-name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            name="email-input"
            data-testid="common_register__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            name="password-input"
            data-testid="common_register__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ !valid }
          // onClick={ () => registerUser() }
          onClick={ () => showUserAlreadyRegistered() }
        >
          CADASTRAR
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email">
        { showInvalidInfoError }
      </p>
    </div>
  );
}

export default Register;

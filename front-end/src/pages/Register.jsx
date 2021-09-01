import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [signupValues, setSignupValues] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [revealPass, setRevealPass] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const passwordLength = 6;
    const nameLengh = 12;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const { name, email, password } = signupValues;
    if (
      emailRegex.test(email)
      && name.length >= nameLengh
      && password.length >= passwordLength
    ) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [signupValues.name, signupValues.email, signupValues.password, signupValues]);

  function handleLocalState(event) {
    const { name, value } = event.target;
    setSignupValues((prevState) => ({ ...prevState, [name]: value }));
  }

  async function registerUser() {
    try {
      const { name, email, password } = signupValues;
      const request = await axios({
        method: 'post',
        url: 'http://localhost:3001/user',
        data: {
          name,
          email,
          password,
        },
      });
      const { data } = request;
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    } catch (e) {
      setErrorMessage('Usuario já cadastrado');
    }
  }

  return (
    <div className="App">
      <div className="signup-container">

        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            className="input-element"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            value={ signupValues.name }
            onChange={ (event) => handleLocalState(event) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            className="input-element"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            value={ signupValues.email }
            onChange={ (event) => handleLocalState(event) }
          />
        </label>
        <div className="password-container">
          <label htmlFor="password">
            <span>Senha</span>
            <input
              type={ revealPass ? 'password' : 'text' }
              name="password"
              className="input-element"
              placeholder="**********"
              data-testid="common_register__input-password"
              value={ signupValues.password }
              onChange={ (event) => handleLocalState(event) }
            />
          </label>
          <span
            onClick={ () => setRevealPass(!revealPass) }
            onKeyDown={ () => {} }
            role="button"
            tabIndex={ 0 }
            aria-label="Reveal and hide pass"
            className={ `far ${revealPass ? 'fa-eye' : 'fa-eye-slash'} passreveal` }
          />
        </div>

        <button
          type="button"
          data-testid="common_register__button-register"
          className="sign-btn"
          disabled={ disableBtn }
          onClick={ registerUser }
        >
          Cadastrar
        </button>
        <span
          data-testid="common_register__element-invalid_register"
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
}

export default Register;

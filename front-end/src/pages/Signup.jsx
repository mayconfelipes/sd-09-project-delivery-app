import React, { useState, useEffect } from 'react';

function Signup() {
  const [signupValues, setSignupValues] = useState({ name: '', email: '', password: '' });
  // const [errorMessage, setErrorMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const testIdcommon = 'common_register__';

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
    console.log(signupValues);
  }

  return (
    <div className="signup-container">
      <div>
        <span>Nome</span>
        <input
          type="text"
          name="name"
          datatestid={ `${testIdcommon}input-name` }
          value={ signupValues.name }
          onChange={ (event) => handleLocalState(event) }
        />
      </div>
      <div>
        <span>Email</span>
        <input
          type="text"
          name="email"
          datatestid={ `${testIdcommon}input-email` }
          value={ signupValues.email }
          onChange={ (event) => handleLocalState(event) }
        />
      </div>
      <div>
        <span>Senha</span>
        <input
          type="text"
          name="password"
          datatestid={ `${testIdcommon}input-password` }
          value={ signupValues.password }
          onChange={ (event) => handleLocalState(event) }
        />
      </div>
      <button
        type="button"
        datatestid={ `${testIdcommon}button-register` }
        disabled={ disableBtn }
      >
        Cadastrar
      </button>
      <span
        datatestid={ `${testIdcommon}button-register` }
      >
        hola
      </span>
    </div>
  );
}

export default Signup;

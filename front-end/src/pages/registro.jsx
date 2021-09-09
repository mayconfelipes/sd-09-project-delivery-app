import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../components/input';
import validators from '../utils/registrationValidation';
import '../styles/Registro.css';

function Registro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(
    () => {
      const userData = { name, email, password };

      if (validators.isValid(userData)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [name, email, password],
  );

  const handleChange = ({ target: { name: fieldName, value } }) => {
    if (error) setError('');
    switch (fieldName) {
    case 'name':
      return setName(value);
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return undefined;
    }
  };

  const handleRegister = async () => {
    const REGISTER_URL = 'http://localhost:3001/api/users/register';
    const payload = { name, email, password, role: 'customer' };

    await axios.post(REGISTER_URL, payload)
      .then(
        (response) => {
          const { user, token } = response.data;
          localStorage.setItem('user', JSON.stringify({ token, ...user }));

          history.push('/customer/products');
        },
        ({ response: { data: { message } } }) => setError(message),
      );
  };

  return (
    <div className="registro">
      <form className="form_registro">
        <div>
          <Input
            className="form-control"
            id="exampleInputName"
            aria-describedby="NamelHelp"
            name="name"
            type="Name"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            onChange={ handleChange }
          />
        </div>
        <div>
          <Input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            type="email"
            placeholder="Seu-email@site.com.br"
            data-testid="common_register__input-email"
            onChange={ handleChange }
          />
        </div>
        <div>
          <Input
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            type="password"
            placeholder="*********"
            data-testid="common_register__input-password"
            onChange={ handleChange }
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success"
            name="Cadastrar"
            data-testid="common_register__button-register"
            disabled={ disabled }
            onClick={ handleRegister }
          >
            Cadastrar
          </button>
        </div>
        {
          error.length > 0
            && (
              <span data-testid="common_register__element-invalid_register">
                { error }
              </span>
            )
        }
      </form>
    </div>
  );
}

export default Registro;

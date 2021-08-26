import React, { useContext } from 'react';
// import { useLocation } from 'react-router-dom';
import context from '../../context';
import { Form, Input } from './styled';

const FormRender = () => {
  const { form, setForm, register } = useContext(context);
  const { name: userName, email, password } = form;

  // const path = useLocation();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <Form>
      {register && <p>NOME</p>}
      {
        register && <Input
          type="text"
          placeHolder="Nome..."
          data-testid="common_register__input-name"
          name="nome"
          value={ userName }
          onChange={ handleChange }
        />
      }
      {register && <p>EMAIL</p>}
      <Input
        id="teste"
        type="text"
        placeHolder="Email..."
        data-testid={ register
          ? 'common_register__input-email' : '"common_login__input-email"' }
        name="email"
        value={ email }
        onChange={ handleChange }
      />
      {register && <p>SENHA</p>}
      <Input
        type="password"
        placeHolder="Senha..."
        data-testid={ register
          ? 'common_register__input-password' : '"common_login__input-password"' }
        name="password"
        value={ password }
        onChange={ handleChange }
      />
    </Form>
  );
};

export default FormRender;

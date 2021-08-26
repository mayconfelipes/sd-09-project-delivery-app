import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import context from '../../context';
import { Form, Input } from './styled';

const FormRender = () => {
  const { form, setForm } = useContext(context);
  const { name: userName, email, password } = form;

  const path = useLocation();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <Form>
      {
        (path.pathname !== '/') && <Input
          type="text"
          placeholder="Nome..."
          data-testid="common_login__input-email"
          name="nome"
          value={ userName }
          onChange={ handleChange }
        />
      }
      <Input
        type="text"
        placeholder="Email..."
        data-testid="common_login__input-email"
        name="email"
        value={ email }
        onChange={ handleChange }
      />
      <Input
        type="password"
        placeholder="Senha..."
        data-testid="common_login__input-password"
        name="password"
        value={ password }
        onChange={ handleChange }
      />
    </Form>
  );
};

export default FormRender;

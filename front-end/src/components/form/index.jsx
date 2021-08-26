import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import context from '../../context';
import { Form, Input } from './styled';

const FormRender = () => {
  const { form: { email, password }, setForm } = useContext(context);

  const path = useLocation();
  console.log(path);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <Form>
      {
        (path.pathname !== '/') && <Input
          type="text"
          placeHolder="Email..."
          data-testid="common_login__input-email"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
      }
      <Input
        type="text"
        placeHolder="Email..."
        data-testid="common_login__input-email"
        name="email"
        value={ email }
        onChange={ handleChange }
      />
      <Input
        type="password"
        placeHolder="Senha..."
        data-testid="common_login__input-password"
        name="password"
        value={ password }
        onChange={ handleChange }
      />

    </Form>
  );
};

export default FormRender;

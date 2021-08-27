import React, { useContext } from 'react';
import context from '../../context';
import { Form, Input } from './styled';

const FormRender = () => {
  const { form, setForm, register } = useContext(context);
  const { name: userName, email, password } = form;

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <Form>
      {register && <p>NOME</p>}
      {
        register && <Input
          type="text"
          placeholder="Nome..."
          data-testid="common_register__input-name"
          name="name"
          value={ userName }
          onChange={ handleChange }
        />
      }
      {register && <p>EMAIL</p>}
      <Input
        id="teste"
        type="text"
        placeholder="Email..."
        data-testid={ `common_${register ? 'register' : 'login'}__input-email` }
        name="email"
        value={ email }
        onChange={ handleChange }
      />
      {register && <p>SENHA</p>}
      <Input
        type="password"
        placeholder="Senha..."
        data-testid={ `common_${register ? 'register' : 'login'}__input-email` }
        name="password"
        value={ password }
        onChange={ handleChange }
      />
    </Form>
  );
};

export default FormRender;

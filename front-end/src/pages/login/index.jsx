import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Main, Logo, LoginButton } from './styled';
import context from '../../context';
import logo from '../../images/logo.png';
import FormRender from '../../components/form';

const Login = () => {
  const { form, setForm } = useContext(context);
  const { redirect } = login;

  logIn = () => {
    // Fazer o fetch para a api e setar o localStorage
    setForm({ ...form, redirect: !redirect });
  };

  return (
    <Main>
      { redirect && <Redirect to="/" /> }
      <Logo src={ logo } alt="Ícone do aplicativo" />
      <FormRender />
      <LoginButton
        type="button"
        data-testid="common_login__button-login"
        onClick={ logIn }
      >
        LOGIN
      </LoginButton>
    </Main>
  );
};

export default Login;

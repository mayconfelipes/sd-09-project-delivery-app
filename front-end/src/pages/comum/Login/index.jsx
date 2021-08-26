import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import PrimaryButton from '../../../components/PrimaryButton';
import TertiaryButton from '../../../components/TertiaryButton';

import style from './login.module.scss';

const Login = () => (
  <section className={ style.loginContainer }>
    <h1>APP Delivery</h1>
    <form className={ style.inputContainer }>
      <Input labelDescription="Login" dataTestId="common_login__input-email" />
      <Input labelDescription="Senha" dataTestId="common_login__input-password" />
      <Link to="/customer/products">
        <PrimaryButton dataTestId="common_login__button-login">Login</PrimaryButton>
      </Link>
      <Link to="/register">
        <TertiaryButton
          dataTestId="common_login__button-register"
        >
          Ainda não tenho conta
        </TertiaryButton>
      </Link>
      <p
        data-testid="common_login__element-invalid-email"
      >
        Se email inválido mostrar uma mensagem
      </p>
    </form>
  </section>
);

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import PrimaryButton from '../../../components/PrimaryButton';

import style from './register.module.scss';

const Register = () => (
  <section className={ style.loginContainer }>
    <h1>Cadastro</h1>
    <form className={ style.inputContainer }>
      <Input labelDescription="Nome" dataTestI="common_register__input-name" />
      <Input labelDescription="Email" dataTestId="common_register__input-email" />
      <Input labelDescription="Senha" dataTestId="common_register__input-password" />
      <Link to="/customer/products">
        <PrimaryButton
          dataTestId="common_register__button-register"
        >
          CADASTRAR
        </PrimaryButton>
      </Link>
      <p
        data-testid="common_register__element-invalid_register"
      >
        Mostrar uma mensagem caso o registro seja inválido
      </p>
    </form>
  </section>
);

export default Register;

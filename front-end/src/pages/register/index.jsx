import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import { Main } from './styled';
import context from '../../context';
import FormRender from '../../components/form';
import formValidator from '../../services/formValidator';

const Register = () => {
  const {
    form, setForm, enableButton, setEnableButton, setRegister,
  } = useContext(context);
  const { email, password, name, redirect } = form;

  useEffect(() => {
    setRegister(true);
  }, [setRegister]);

  useEffect(() => {
    const isValid = formValidator(email, password, name);
    setEnableButton(isValid);
  }, [email, password, name, setEnableButton, setForm]);

  return (
    <Main>
      { redirect && <Redirect to="/login" /> }
      <h1>Cadastro</h1>
      <FormRender />
      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ () => console.log('fazer fetch de cadastro') }
        disabled={ !enableButton }
      >
        CADASTRAR
      </button>
    </Main>
  );
};

export default Register;

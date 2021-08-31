import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { Main } from './styled';
import context from '../../context';
import FormRender from '../../components/form';
import formValidator from '../../services/formValidator';
import Api from '../../services/api';

const Register = () => {
  const [registerOkay, setRegisterOkay] = useState(false);
  const [errorExist, setErrorExist] = useState(false);
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

  const fetchRegister = async () => {
    const data = { name, email, password };

    const result = await Api.post('/register', { ...data })
      .then((response) => response)
      .catch((err) => {
        setErrorExist(true);
        return { Error: err };
      });

    if (!result.Error) {
      const { token } = result.data;
      localStorage
        .setItem('user', JSON.stringify({ name, email, role: 'customer', token }));
      setRegisterOkay(true);
    }
  };
  const id = 'common_register__element-invalid_register';
  return (
    <Main>
      { redirect && <Redirect to="/login" /> }
      <h1>Cadastro</h1>
      <FormRender />
      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ () => fetchRegister() }
        disabled={ !enableButton }
      >
        CADASTRAR
      </button>
      { registerOkay && <Redirect to="customer/products" /> }
      { errorExist
        && <p data-testid={ id }> Error </p> }
    </Main>
  );
};

export default Register;

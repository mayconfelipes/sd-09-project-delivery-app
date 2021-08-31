import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Main, Logo, LoginButton, Register } from './styled';
import context from '../../context';
import logo from '../../images/logo.png';
import FormRender from '../../components/form';
import formValidator from '../../services/formValidator';
import Api from '../../services/api';

const Login = () => {
  const [registerOkay, setRegisterOkay] = useState(false);
  const [error, setError] = useState(false);
  const { form, setForm, enableButton, setEnableButton } = useContext(context);
  const { email, password } = form;

  const fetchRegister = async () => {
    const oldLocal = JSON.parse(localStorage.getItem('user'));

    const result = await Api.post('/login', { email, password })
      .then((response) => response)
      .catch((err) => console.log(err));

    if (!result.data.token) setError(true);

    const { token } = result.data;

    oldLocal.token = token;

    localStorage
      .setItem('user', JSON.stringify(oldLocal));
    setRegisterOkay(true);
  };

  useEffect(() => {
    const isValid = formValidator(email, password);
    setEnableButton(isValid);
  }, [email, password, setEnableButton, setForm]);

  return (
    <Main>
      { registerOkay && <Redirect to="/customer/products" /> }
      { error
        && <p common_login__element-invalid-email>Deu erro</p>}
      <Logo src={ logo } alt="Ícone do aplicativo" />
      <FormRender />
      <LoginButton
        type="button"
        data-testid="common_login__button-login"
        onClick={ fetchRegister }
        disabled={ !enableButton }
      >
        LOGIN
      </LoginButton>
      <LoginButton
        type="button"
      >
        <Register
          to="/register"
          data-testid="common_login__button-register"
        >
          REGISTER
        </Register>
      </LoginButton>
    </Main>
  );
};

export default Login;

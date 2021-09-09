import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Main, Logo, LoginButton, Register } from './styled';
import context from '../../context';
import logo from '../../images/logo.png';
import FormRender from '../../components/form';
import formValidator from '../../services/formValidator';
import Api from '../../services/api';

const Login = () => {
  const [registerOkay, setRegisterOkay] = useState({ redirect: false, roleUser: '' });
  const [errorExist, setErrorExist] = useState(false);
  const { form, setForm, enableButton, setEnableButton } = useContext(context);
  const { email, password } = form;
  const { roleUser, redirect } = registerOkay;

  const fetchRegister = async () => {
    const result = await Api.post('/login', { email, password })
      .then((response) => response)
      .catch((err) => {
        setErrorExist(true);
        return { Error: err };
      });

    if (!result.Error) {
      const { token, payload } = result.data;
      const { name, email: emailBack, role } = payload;

      localStorage
        .setItem(
          'user',
          JSON.stringify({ name, email: emailBack, role, token }),
        );

      setRegisterOkay({ redirect: true, roleUser: role });
    }
  };

  useEffect(() => {
    const isValid = formValidator(email, password);
    setEnableButton(isValid);
  }, [email, password, setEnableButton, setForm]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      const { token, role } = JSON.parse(localStorage.getItem('user'));
      const ten = 10;

      if (token.length > ten) {
        setRegisterOkay({
          redirect: true,
          roleUser: role,
        });
      }
    }
  });

  return (
    <Main>
      {
        (redirect && roleUser === 'customer') && <Redirect to="/customer/products" />
      }
      {
        (redirect && roleUser === 'administrator') && <Redirect to="/admin/manage" />
      }
      {
        (redirect && roleUser === 'seller') && <Redirect to="/seller/orders" />
      }
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
        data-testid="common_login__button-register"
      >
        <Register
          to="/register"
        >
          REGISTER
        </Register>
      </LoginButton>
      { errorExist && <p data-testid="common_login__element-invalid-email">Error</p> }
    </Main>
  );
};

export default Login;

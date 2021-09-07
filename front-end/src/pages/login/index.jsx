import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Main, Logo, LoginButton, Register } from './styled';
import context from '../../context';
import logo from '../../images/logo.png';
import FormRender from '../../components/form';
import formValidator from '../../services/formValidator';
import Api from '../../services/api';

const Login = () => {
  const [registerOkay, setRegisterOkay] = useState({ redirect: false, role: '' });
  const [errorExist, setErrorExist] = useState(false);
  const { form, setForm, enableButton, setEnableButton } = useContext(context);
  const { email, password } = form;
  const { role, redirect } = registerOkay;

  const fetchRegister = async () => {
    const result = await Api.post('/login', { email, password })
      .then((response) => response)
      .catch((err) => {
        setErrorExist(true);
        return { Error: err };
      });
    if (!result.Error) {
      const { token, payload } = result.data;
      const { name, email: emailBack, role: userRole } = payload;
      localStorage
        .setItem('user', JSON.stringify({ name, email: emailBack, role, token }));
      setRegisterOkay({ redirect: true, role: userRole });
    }
  };

  useEffect(() => {
    const isValid = formValidator(email, password);
    setEnableButton(isValid);
  }, [email, password, setEnableButton, setForm]);

  return (
    <Main>
      {
        (redirect && role === 'customer') && <Redirect to="/customer/products" />
      }
      {
        (redirect && role === 'seller') && <Redirect to="/seller/order" />
      }
      {
        (redirect && role === 'administrator') && <Redirect to="/admin/manage" />
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

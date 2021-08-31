import React from 'react';
import {
  AppTitle,
  Button,
  Container,
  Image,
  Input,
  Label,
  Wrapper,
} from '../../Components';
import assets from '../../Assets';

const testIds = {
  emailInput: 'common_login__input-email',
  passwordInput: 'common_login__input-password',
  loginButton: 'common_login__button-login',
  registerButton: 'common_login__button-register',
  errorMessage: 'common_login__element-invalid-email',
};

const LoginPage = () => (
  <Container>
    <Image src={ assets.images.logo } />
    <AppTitle>AppTitle</AppTitle>
    <Wrapper>
      <Label>
        Campo
        <Input type="email" data-testId={ testIds.emailInput } />
      </Label>
      <Label>
        Campo
        <Input type="password" data-testId={ testIds.passwordInput } />
      </Label>
      <Button data-testId={ testIds.loginButton }>
        Login
      </Button>
      <Button data-testId={ testIds.registerButton }>
        Ainda não tenho conta
      </Button>
      <Wrapper data-testId={ testIds.errorMessage }>
        Mensagem de erro
      </Wrapper>
    </Wrapper>
  </Container>
);

export default LoginPage;

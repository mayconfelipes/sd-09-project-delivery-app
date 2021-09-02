import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  AppTitle,
  Button,
  Container,
  Image,
  Input,
  Label,
  Wrapper,
} from '../../Components';
import assets from '../../assets';
import testIds from '../../utils/testIds';
import useLoginInfo from '../../hooks/useLoginInfo';
import useLoginApi from '../../hooks/useLoginApi';
import paths from '../../Routes/paths';

const LoginPage = () => {
  const { loginInfo, handleFieldsChange, isValidInfo } = useLoginInfo();
  const { isValidLogin, loginUser } = useLoginApi();
  const shouldRenderError = isValidLogin === false;

  if (isValidLogin) return <Redirect to={ paths.customerProducts } />;

  return (
    <Container>
      <Image src={ assets.images.logo } />
      <AppTitle>AppTitle</AppTitle>
      <Wrapper>
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={ loginInfo.email }
            data-testid={ testIds.id1 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            name="password"
            value={ loginInfo.password }
            data-testid={ testIds.id2 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-testid={ testIds.id3 }
          onClick={ () => loginUser(loginInfo) }
          disabled={ isValidInfo }
        >
          Login
        </Button>
        <Button data-testid={ testIds.id4 }>
          Ainda não tenho conta
        </Button>
        { shouldRenderError && (
          <Wrapper data-testid={ testIds.id5 }>
            Mensagem de erro
          </Wrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

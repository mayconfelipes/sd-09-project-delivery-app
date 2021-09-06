import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

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
import paths from '../../Routes/paths';
import { AppContext } from '../../context';
import redirectByRole from '../../Routes/redirectByRole';
import useAuthentication from '../../hooks/useAuthentication';
import backendStatus from '../../utils/backendStatus';
import useAuthFormValidation from '../../hooks/useAuthFormValidation';
import { loginSchema } from '../../utils/validateInfo';

const LoginPage = () => {
  const { authInfo, handleFieldsChange, isValidInfo } = useAuthFormValidation({
    fields: ['email', 'password'],
    validationSchema: loginSchema,
  });
  const { isValidRequest, requestUser } = useAuthentication();
  const { user } = useContext(AppContext);
  const shouldRenderError = isValidRequest === false;
  const history = useHistory();

  if (isValidRequest) return redirectByRole(user.data.role);

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
            value={ authInfo.email }
            data-testid={ testIds.id1 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            name="password"
            value={ authInfo.password }
            data-testid={ testIds.id2 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-testid={ testIds.id3 }
          onClick={ () => requestUser({
            validStatus: backendStatus.ok,
            data: authInfo,
            endpoint: 'login',
          }) }
          disabled={ isValidInfo }
        >
          Login
        </Button>
        <Button
          data-testid={ testIds.id4 }
          onClick={ () => {
            history.push(paths.register);
          } }
        >
          Ainda não tenho conta
        </Button>
        { shouldRenderError && (
          <Wrapper
            data-testid={ testIds.id5 }
          >
            Mensagem de erro
          </Wrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

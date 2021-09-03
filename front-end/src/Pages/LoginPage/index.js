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
import useLoginInfo from '../../hooks/useLoginInfo';
import useLoginApi from '../../hooks/useLoginApi';
import paths from '../../Routes/paths';
import { AppContext } from '../../context';
import redirectByRole from '../../Routes/redirectByRole';

const LoginPage = () => {
  const { loginInfo, handleFieldsChange, isValidInfo } = useLoginInfo();
  const { isValidLogin, loginUser } = useLoginApi();
  const { user } = useContext(AppContext);
  const shouldRenderError = isValidLogin === false;
  const history = useHistory();

  if (isValidLogin) return redirectByRole(user.data.role);

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

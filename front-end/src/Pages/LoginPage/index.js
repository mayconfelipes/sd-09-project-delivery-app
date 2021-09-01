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
import testIds from '../../utils/testIds';
import useLoginInfo from '../../hooks/useLoginInfo';
import { PostLogin } from '../../Services/Api';

const LoginPage = () => {
  const [loginInfo, handleFieldsChange] = useLoginInfo();
  const loginUser = (data) => () => {
    PostLogin(data);
  };
  return (
    <Container>
      <Image src={ assets.images.logo } />
      <AppTitle>AppTitle</AppTitle>
      <Wrapper>
        <Label>
          Campo
          <Input
            type="email"
            name="email"
            value={ loginInfo.email }
            data-test-id={ testIds.id1 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Campo
          <Input
            type="password"
            name="password"
            value={ loginInfo.password }
            data-test-id={ testIds.id2 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-test-id={ testIds.id3 }
          onClick={ loginUser(loginInfo) }
        >
          Login
        </Button>
        <Button data-test-id={ testIds.id4 }>
          Ainda não tenho conta
        </Button>
        <Wrapper data-test-id={ testIds.id5 }>
          Mensagem de erro
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

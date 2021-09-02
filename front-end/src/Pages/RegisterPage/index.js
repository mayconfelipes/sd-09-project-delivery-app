import React from 'react';
import {
  AppTitle,
  Button,
  Container,
  Input,
  Label,
  Wrapper,
} from '../../Components';
import testIds from '../../utils/testIds';
import useRegisterInfo from '../../hooks/useRegisterInfo';
import requestApi from '../../services/api';

const RegisterPage = () => {
  const [registerInfo, handleFieldsChange] = useRegisterInfo();
  const registerUser = (data) => () => {
    requestApi({ method: 'post', data, endpoint: 'register' });
  };
  return (
    <Container>
      <AppTitle>Cadrastro</AppTitle>
      <Wrapper>
        <Label>
          Nome
          <Input
            type="string"
            name="userName"
            value={ registerInfo.userName }
            data-test-id={ testIds.id6 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={ registerInfo.email }
            data-test-id={ testIds.id7 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            name="password"
            value={ registerInfo.password }
            data-test-id={ testIds.id8 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-test-id={ testIds.id9 }
          onClick={ registerUser(registerInfo) }
        >
          CADASTRAR
        </Button>
        <Wrapper data-test-id={ testIds.id10 }>
          Mensagem de erro
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

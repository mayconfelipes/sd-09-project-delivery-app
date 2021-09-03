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
import { PostRegister } from '../../Services/Api';

const RegisterPage = () => {
  const [registerInfo, handleFieldsChange] = useRegisterInfo();
  const registerUser = (data) => () => {
    PostRegister(data);
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
            data-testid={ testIds.id6 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={ registerInfo.email }
            data-testid={ testIds.id7 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            name="password"
            value={ registerInfo.password }
            data-testid={ testIds.id8 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-testid={ testIds.id9 }
          onClick={ registerUser(registerInfo) }
        >
          CADASTRAR
        </Button>
        <Wrapper data-testid={ testIds.id10 }>
          Mensagem de erro
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

import React, { useContext } from 'react';
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
import useRegisterApi from '../../hooks/useRegisterApi';
import { AppContext } from '../../context';
import redirectByRole from '../../Routes/redirectByRole';

const RegisterPage = () => {
  const { registerInfo, handleFieldsChange, isValidInfo } = useRegisterInfo();
  const { isValidRegistration, registerUser } = useRegisterApi();
  const { user } = useContext(AppContext);
  const shouldRenderError = isValidRegistration === false;

  if (isValidRegistration) return redirectByRole(user.data.role);

  return (
    <Container>
      <AppTitle>Cadastro</AppTitle>
      <Wrapper>
        <Label>
          Nome
          <Input
            type="text"
            name="name"
            value={ registerInfo.name }
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
          onClick={ () => registerUser(registerInfo) }
          disabled={ isValidInfo }
        >
          CADASTRAR
        </Button>
        { shouldRenderError && (
          <Wrapper
            data-testid={ testIds.id10 }
          >
            Mensagem de erro
          </Wrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

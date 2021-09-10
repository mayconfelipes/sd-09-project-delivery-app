import React from 'react';
import {
  AppTitle,
  Button,
  Container,
  Input,
  Label,
  Wrapper,
} from '../../components';
import testIds from '../../utils/testIds';
import redirectByRole from '../../Routes/redirectByRole';
import useAuthentication from '../../hooks/useAuthentication';
import backendStatus from '../../utils/backendStatus';
import { registerSchema } from '../../utils/validateInfo';
import useAuthFormInfo from '../../hooks/useAuthFormInfo';
import { useUserDataContext } from '../../context/contexts';

const RegisterPage = () => {
  const { authInfo, handleFieldsChange, isValidInfo } = useAuthFormInfo({
    fields: ['name', 'email', 'password'],
    validationSchema: registerSchema,
  });
  const { isValidRequest, requestUser } = useAuthentication();
  const { role: userRole } = useUserDataContext();
  const shouldRenderError = isValidRequest === false;

  if (isValidRequest) return redirectByRole(userRole);

  return (
    <Container>
      <AppTitle>Cadastro</AppTitle>
      <Wrapper>
        <Label>
          Nome
          <Input
            type="text"
            name="name"
            value={ authInfo.name }
            data-testid={ testIds.id6 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={ authInfo.email }
            data-testid={ testIds.id7 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            name="password"
            value={ authInfo.password }
            data-testid={ testIds.id8 }
            onChange={ handleFieldsChange }
          />
        </Label>
        <Button
          data-testid={ testIds.id9 }
          onClick={ () => requestUser({
            validStatus: backendStatus.created,
            data: authInfo,
            endpoint: 'register',
          }) }
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

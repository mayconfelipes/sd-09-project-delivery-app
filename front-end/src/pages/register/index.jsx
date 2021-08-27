import React, { useEffect, useContext } from 'react';
import { Main } from './styled';
import context from '../../context';
import FormRender from '../../components/form';

const Register = () => {
  const { setRegister } = useContext(context);

  useEffect(() => {
    function changeStatusRegister() {
      setRegister(true);
    };
    await changeStatusRegister();
  }, [changeStatusRegister]);

  return (
    <Main>
      <h1>Cadastro</h1>
      <FormRender />
      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ console.log('fazer fetch de cadastro') }
      >
        CADASTRAR
      </button>
    </Main>
  );
};

export default Register;

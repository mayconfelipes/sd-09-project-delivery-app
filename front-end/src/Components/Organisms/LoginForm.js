import React from 'react';
import InputText from '../Molecules/InputText';
import Button from '../Atoms/Button';

const style = {
  backgroundColor: '#1F1D2B',
  padding: '27px 24px 13px 24px',
  borderRadius: '8px',
  border: '1px solid #393C49',
  display: 'flex',
  flexDirection: 'column',
};

function LoginForm() {
  return (
    <form style={ style }>
      <InputText name="Login" placeholder="email@trybe.com.br" inputType="text" />
      <InputText name="Password" inputType="password" />
      <Button text="Login" styleColor="primary" />
      <Button text="Ainda não tenho conta" styleColor="secondary" />
    </form>
  );
}

export default LoginForm;

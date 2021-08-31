import React from 'react';
import Logo from '../Components/Organisms/Logo';
import RegisterFormComponent from '../Components/Organisms/RegisterForm';

function Register() {
  return (
    <div className="App">
      <Logo />
      <RegisterFormComponent title="Registro" />
    </div>
  );
}

export default Register;

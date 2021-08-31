import React from 'react';
import LoginForm from '../Components/Organisms/LoginForm';
import Logo from '../Components/Organisms/Logo';

function Login() {
  return (
    <div className="App">
      <Logo />
      <LoginForm title="Login" />
    </div>
  );
}

export default Login;

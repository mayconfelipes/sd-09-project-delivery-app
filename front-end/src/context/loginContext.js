import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import { fetchToLogin, fetchToRegister } from '../services/api';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);

  const handleClickLogin = async () => {
    console.log('to aq');
    await fetchToLogin(email, password, setInvalidUser, setRedirectTo);
  };

  const handleClickRegister = async () => {
    console.log('request /register');
    await fetchToRegister({ name, email, password }, setInvalidUser, setRedirectTo);
  };

  const contextValue = { email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    handleClickLogin,
    handleClickRegister,
    invalidUser,
    redirectTo,
  };

  return (
    <LoginContext.Provider value={ contextValue }>
      { children }
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: node.isRequired,
};

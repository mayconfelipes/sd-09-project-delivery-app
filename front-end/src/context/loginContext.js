import { node } from 'prop-types';
<<<<<<< HEAD
import React, { createContext, useState } from 'react';
=======
import { fetchToLogin, fetchToRegister } from '../services/api';
>>>>>>> b80bfd10e03aebc2df878b433c5f6c7f30271177

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);
  const [role, setRole] = useState('');
  const [cart, setCart] = useState([]);

<<<<<<< HEAD
  const fetchToLogin = () => {
    const body = {
      email,
      password,
    };

    const myHeadersToLogin = {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    fetch('http://localhost:3001/login', {
      headers: myHeadersToLogin,
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.message) {
          setInvalidUser(true);
        } else {
          console.log(response);
          localStorage.setItem('User', JSON.stringify(response));
          setRedirectTo(true);
          setRole(response.role);
        }
      });
  };

  const handleClickLogin = async () => {
    await fetchToLogin();
=======
  const handleClickLogin = async () => {
    console.log('to aq');
    await fetchToLogin(email, password, setInvalidUser, setRedirectTo);
  };

  const handleClickRegister = async () => {
    console.log('request /register');
    await fetchToRegister({ name, email, password }, setInvalidUser, setRedirectTo);
>>>>>>> b80bfd10e03aebc2df878b433c5f6c7f30271177
  };

  const contextValue = {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    handleClickLogin,
    handleClickRegister,
    invalidUser,
    redirectTo,
    cart,
    setCart,
    role,
    setRole,
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

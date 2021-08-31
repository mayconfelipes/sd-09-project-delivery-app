import { node } from 'prop-types';
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);
  const [role, setRole] = useState('');
  const [cart, setCart] = useState([]);

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
  };

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    handleClickLogin,
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

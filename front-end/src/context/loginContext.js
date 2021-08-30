import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchToLogin = () => {
    const body = {
      username: email,
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
        if (response.error) {
          setInvalidUser(true);
        } else {
          localStorage.setItem('Token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      });
  };

  const handleClickLogin = async () => {
    await fetchToLogin;
  };

  const contextValue = { email,
    setEmail,
    password,
    setPassword,
    handleClickLogin,
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

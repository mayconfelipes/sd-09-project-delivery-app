import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState('');
  const [redirectTo, setRedirectTo] = useState(false);

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
          setRedirectTo(true);
          localStorage.setItem('User', JSON.stringify(response));
        }
      });
  };

  const handleClickLogin = async () => {
    console.log('to aq');
    await fetchToLogin();
  };

  const contextValue = { email,
    setEmail,
    password,
    setPassword,
    handleClickLogin,
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

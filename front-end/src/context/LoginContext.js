import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [apiResponse, setApiResponse] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const contextData = {
    apiResponse,
    loginErrorMessage,
    setApiResponse,
    setLoginErrorMessage,
  };

  return (
    <LoginContext.Provider value={ contextData }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

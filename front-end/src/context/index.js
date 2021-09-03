import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(() => false);
  const [token, setToken] = useState(() => '');

  const context = {
    auth: { isAuthenticated, setAuthentication, token, setToken },
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

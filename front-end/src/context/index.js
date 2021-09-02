import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(() => false);

  const context = {
    auth: { isAuthenticated, setAuthentication },
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

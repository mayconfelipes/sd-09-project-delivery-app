import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserData } from '../utils/storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(() => false);
  const [userData, setUserData] = useState(() => getUserData());

  const context = {
    auth: { isAuthenticated, setAuthentication },
    user: { data: userData, setUserData },
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

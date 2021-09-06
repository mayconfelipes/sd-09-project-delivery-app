import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserData } from '../utils/storage';
import useToggle from '../hooks/useToggle';
import getPageItemsByRole from '../utils/getPageItemsByRole';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isFetching, toggleFetching] = useToggle(false);
  const [isAuthenticated, setAuthentication] = useState(() => false);
  const [userData, setUserData] = useState(() => getUserData());
  const { data: { role } } = userData;

  const context = {
    request: { isFetching, toggleFetching },
    auth: { isAuthenticated, setAuthentication },
    user: { data: userData.data, setUserData },
    token: { exp: userData.exp, iat: userData.iat },
    pageItems: useMemo(() => getPageItemsByRole(role), [role]),
  };

  console.log('userData', context);

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

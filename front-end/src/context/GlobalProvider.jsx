import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthProvider, RequestProvider, UserProvider } from './providers';

import useToggle from '../hooks/useToggle';
import { getUserData } from '../utils/storage';
import valuesFactory from './utils/valuesFactory';

const GlobalProvider = ({ children }) => {
  const [isRequesting, toggleRequesting] = useToggle(false);
  const [isAuthenticated, setAuthentication] = useState(() => !!getUserData().token);
  const [userData, setUserData] = useState(() => getUserData());

  const requestValues = valuesFactory(isRequesting, toggleRequesting);
  const authValues = valuesFactory(isAuthenticated, setAuthentication);
  const userValues = valuesFactory(userData, setUserData);

  return (
    <RequestProvider { ...requestValues }>
      <AuthProvider { ...authValues }>
        <UserProvider { ...userValues }>
          { children }
        </UserProvider>
      </AuthProvider>
    </RequestProvider>
  );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

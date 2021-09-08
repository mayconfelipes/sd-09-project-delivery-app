import React from 'react';
import PropTypes from 'prop-types';
import GlobalProvider from './GlobalProvider';
import CustomRoleProvider from './CustomRoleProvider';

const AppProvider = ({ children }) => (
  <GlobalProvider>
    <CustomRoleProvider>
      { children }
    </CustomRoleProvider>
  </GlobalProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

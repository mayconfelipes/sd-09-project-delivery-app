import React from 'react';
import PropTypes from 'prop-types';

import {
  CustomRoleActionContext,
  CustomRoleDataContext,
  useUserDataContext,
} from './contexts';
import useCart from '../hooks/useCart';

const roleStates = {
  customer: useCart,
};

const CustomRoleProvider = ({ children }) => {
  const { role } = useUserDataContext();
  const { data, actions } = role ? roleStates[role]() : {};

  return (
    <CustomRoleDataContext.Provider value={ data }>
      <CustomRoleActionContext.Provider value={ actions }>
        { children }
      </CustomRoleActionContext.Provider>
    </CustomRoleDataContext.Provider>
  );
};

export default CustomRoleProvider;

CustomRoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

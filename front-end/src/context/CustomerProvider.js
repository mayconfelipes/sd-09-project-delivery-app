import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const data = {};
  return (
    <CustomerContext.Provider value={ data }>
      {children}
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;

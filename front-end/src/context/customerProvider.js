import React from 'react';
import PropTypes from 'prop-types';
import Customer from './customerContext';

function CustomerProvider({ children }) {
  const data = {};
  return (
    <Customer.Provider value={ data }>
      {children}
    </Customer.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;

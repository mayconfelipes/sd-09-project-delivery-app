import React from 'react';
import PropTypes from 'prop-types';
import Customer from './customerContext';

function CustomerProvider({ children }) {
  const shoppingCart = [
    {
      id: 1,
      name: 'Stella Artois',
      price: '11.00',
      url_image: 'none',
      quantity: 2,
    },
  ];

  const sellers = [
    {
      id: 1,
      name: 'Jeca Tatu',
    },
  ];

  const data = {
    shoppingCart,
    sellers,
  };
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

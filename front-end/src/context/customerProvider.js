import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Customer from './customerContext';

function CustomerProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([
  // {
    // id: 1,
    // name: 'Stella Artois',
    // price: '11.00',
    // url_image: 'none',
    // quantity: 2,
  // },
  ]);

  const [sellers, setSellers] = useState([
    {
      // id: 1,
      // name: 'Jeca Tatu',
    },
  ]);

  const data = {
    shoppingCart,
    setShoppingCart,
    sellers,
    setSellers,
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

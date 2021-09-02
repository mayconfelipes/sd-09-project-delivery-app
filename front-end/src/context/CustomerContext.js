import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => Object.values(cartItems)
      .reduce((sum, { quantity, price }) => {
        sum += (quantity * price);
        return sum;
      }, 0));
  }, [cartItems]);

  const updateCart = (id, name, price, quantity) => {
    setCartItems({ ...cartItems, [id]: { id, name, price, quantity } });
  };

  const contextData = { cartItems, updateCart, total: total.toFixed(2) };

  return (
    <CustomerContext.Provider value={ contextData }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

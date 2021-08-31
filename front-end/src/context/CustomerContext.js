import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [productsQty, setProductsQty] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => Object.values(productsQty)
      .reduce((sum, { quantity, price }) => {
        sum += (quantity * price);
        return sum;
      }, 0));
  }, [productsQty]);

  const updateQuantity = (id, quantity, price) => {
    setProductsQty({ ...productsQty, [id]: { quantity, price } });
  };

  const contextData = { productsQty, updateQuantity, total: total.toFixed(2) };

  return (
    <CustomerContext.Provider value={ contextData }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

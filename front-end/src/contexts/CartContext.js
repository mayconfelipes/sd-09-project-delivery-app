import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();

export default function CartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = {
    totalPrice,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={ cart }>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  console.log(context);
  const { totalPrice, setTotalPrice } = context;
  return { totalPrice, setTotalPrice };
}

CartProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

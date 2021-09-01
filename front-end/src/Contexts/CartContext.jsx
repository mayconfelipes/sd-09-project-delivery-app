import React, { createContext, useState, useContext } from 'react';
import { node } from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // falta logica de adicionar item ao carrinho e atualizar quantity

  const context = {
    cartItems, setCartItems, totalPrice, setTotalPrice,
  };

  return (
    <CartContext.Provider value={ context }>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  // console.log(context);
  return context;
}

CartProvider.propTypes = {
  children: node,
}.isRequired;

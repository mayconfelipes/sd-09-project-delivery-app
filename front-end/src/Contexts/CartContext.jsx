import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const teste = [{
    id: 1,
    name: 'cerveja',
    quantity: 2,
    price: 3.50,
  },
  {
    id: 2,
    name: 'água',
    quantity: 2,
    price: 2,
  }];

  // falta logica de adicionar item ao carrinho e atualizar quantity

  const [cartItems, setCartItems] = useState(teste);

  const [totalPrice, setTotalPrice] = useState(0);

  function addCartItem(item) {
    setCartItems(...cartItems, { ...item });
  }

  function updateTotalPrice() {
    return totalPrice;
  }

  const context = {
    cartItems, setCartItems, addCartItem, totalPrice, setTotalPrice, updateTotalPrice,
  };

  return (
    <CartContext.Provider value={ context }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
}.isRequired;

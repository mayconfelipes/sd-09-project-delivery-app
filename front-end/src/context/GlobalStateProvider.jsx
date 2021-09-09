import React, { useState, useContext, useEffect } from 'react';

import P from 'prop-types';
import GlobalContext from './context';

export const GlobalStateProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    setCartQuantity(cartQuantity);
    const one = 1;
    const filtered = cartQuantity.filter(({ quantity }) => quantity === 0);

    if (filtered.length) {
      const index = cartQuantity.findIndex(({ id }) => id === filtered[0].id);
      if (index !== -one) {
        cartQuantity.splice(index, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cartQuantity));
  }, [cartQuantity, itemId]);

  useEffect(() => {
    const sumOfValues = cartQuantity
      .reduce((sum, { price, quantity }) => {
        const intPrice = parseFloat(price.replace(',', '.'));
        return parseFloat(sum) + intPrice * parseFloat(quantity);
      }, 0.00);
    const totPrice = (Math.round(sumOfValues * 100) / 100).toFixed(2);
    const number = totPrice.toString();
    setTotalPrice(number.replace('.', ','));
  }, [cartQuantity, itemId]);

  return (
    <GlobalContext.Provider
      value={
        {
          setCartQuantity,
          cartQuantity,
          totalPrice,
          setItemId }
      }
    >
      { children }
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

GlobalStateProvider.propTypes = {
  children: P.node.isRequired,
};

export default useGlobalContext;

import React, { useState, useContext, useEffect } from 'react';
import P from 'prop-types';
import GlobalContext from './context';

export const GlobalStateProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartQuantity(cartQuantity);
  }, [cartQuantity]);

  // SOURCE: https://stackoverflow.com/questions/53226100/array-filter-to-remove-duplicate-ojects
  const result = Object.values(cartQuantity)
    .reduce((acc, cur) => Object.assign(acc, { ...acc, [cur.description]: cur }), {});

  useEffect(() => {
    console.log(Object.values(result));
    const sumOfValues = Object.values(result)
      .reduce((sum, { price, quantity }) => {
        const intPrice = parseFloat(price.replace(',', '.'));
        return parseFloat(sum) + intPrice * parseFloat(quantity);
      }, 0.00);
    setTotalPrice(Math.round(sumOfValues * 100) / 100);
  }, [result]);

  return (
    <GlobalContext.Provider
      value={
        { setCartQuantity, cartQuantity, totalPrice }
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

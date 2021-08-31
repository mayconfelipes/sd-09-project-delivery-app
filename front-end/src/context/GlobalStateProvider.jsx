import React, { useState, useContext, useEffect } from 'react';
// import * as lodash from 'lodash';
import P from 'prop-types';
import GlobalContext from './context';

export const GlobalStateProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    setCartQuantity(cartQuantity);
    console.log(cartQuantity);
  }, [cartQuantity]);

  console.log(itemId);
  useEffect(() => {
    // SOURCE: https://stackoverflow.com/questions/53226100/array-filter-to-remove-duplicate-ojects
    const result = Object.values(cartQuantity)
      .reduce((acc, cur) => Object.assign(acc, {
        ...acc, [cur.description]: cur }), {});
    const allItems = Object.values(result).filter((item) => item.quantity > 0);
    setItems(allItems);
    console.log('allItems', allItems);
  }, [cartQuantity]);

  useEffect(() => {
    const sumOfValues = Object.values(items)
      .reduce((sum, { price, quantity }) => {
        const intPrice = parseFloat(price.replace(',', '.'));
        return parseFloat(sum) + intPrice * parseFloat(quantity);
      }, 0.00);
    const totPrice = (Math.round(sumOfValues * 100) / 100).toFixed(2);
    const number = totPrice.toString();
    setTotalPrice(number.replace('.', ','));
  }, [items]);

  return (
    <GlobalContext.Provider
      value={
        {
          setCartQuantity,
          cartQuantity,
          totalPrice,
          items,
          setItems,
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

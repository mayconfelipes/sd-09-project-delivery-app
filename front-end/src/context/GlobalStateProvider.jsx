import React, { useState, useContext } from 'react';
import P from 'prop-types';
import GlobalContext from './context';

export const GlobalStateProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  const onHandleDecrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const onHandleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setQuantity(...quantity, { [name]: value });
    return null;
  };

  return (
    <GlobalContext.Provider
      value={
        {
          onHandleDecrement,
          onHandleIncrement,
          quantity,
          onInputChange }
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

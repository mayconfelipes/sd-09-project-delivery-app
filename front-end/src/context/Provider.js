import React, { useState } from 'react';
import { func } from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product) => {
    setProducts([...product]);
  };

  const value = {
    products,
    addProduct,
    removeProduct,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: func.isRequired,
};

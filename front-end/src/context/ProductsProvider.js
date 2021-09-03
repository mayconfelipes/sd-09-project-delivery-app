import React, { useState } from 'react';
import { func } from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const updateProductList = (product) => {
    const productsCopy = products.slice();
    const productIndex = productsCopy.findIndex(({ id }) => id === product.id);
    if (productIndex >= 0) {
      productsCopy[productIndex] = product;
    } else {
      productsCopy.push(product);
    }

    return productsCopy;
  };

  const addProduct = (product) => setProducts(updateProductList(product));

  const removeProduct = (product) => {
    if (product.quantity === 0) {
      const productsCopy = products.filter(({ id }) => id !== product.id);
      setProducts(productsCopy);
    } else {
      setProducts(updateProductList(product));
    }
  };

  const clearCart = () => setProducts([]);

  const value = {
    products,
    addProduct,
    removeProduct,
    clearCart,
  };

  return (
    <ProductsContext.Provider value={ value }>
      { children }
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: func.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

const ProductsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);

  const getProducts = async () => {
    try {
      const getFromDB = await fetch('http://localhost:3001/products');
      const respDB = await getFromDB.json();
      setProducts(respDB);
      return respDB;
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const getFromDB = await fetch('http://localhost:3001/users');
      const respDB = await getFromDB.json();
      setUsers(respDB);
      return respDB;
    } catch (err) {
      console.log(err);
    }
  };

  const context = {
    getProducts,
    getUsers,
    setUsers,
    users,
    setProducts,
    products,
    setOrder,
    order,
  };

  return (
    <ProductsContext.Provider value={ context }>
      { children }
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;

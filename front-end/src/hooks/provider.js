import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from './context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useHistory();

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      setUser(response.data);
      router.push('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    if (products.length) return;
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
      const a = {};
      response.data.forEach(({ name, price }) => { a[name] = { qty: 0, price }; });
      setProductsCart(a);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setUserInLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  const contextValue = {
    user,
    setUser,
    signIn,
    getProducts,
    products,
    setUserInLocalStorage,
    productsCart,
    setProductsCart,
    loading,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;

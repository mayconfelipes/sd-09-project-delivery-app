import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from './context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [saleId, setSaleId] = useState({});
  const [sellersId, setSellersId] = useState([]);
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

  const setProductCartInLocalStorage = (data) => {
    localStorage.setItem('productCart', JSON.stringify(data));
  };

  const getProducts = async () => {
    console.log('getProducts', user.token);
    if (products.length) return;
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
      const productObject = {};
      response.data.forEach(({ name, price }) => {
        productObject[name] = { name, quantity: 0, price };
      });
      setProductsCart(productObject);
      if (!JSON.parse(localStorage.getItem('productCart'))) {
        setLoading(false);
        return setProductCartInLocalStorage(productObject);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSellersId = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seller');
      setSellersId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSales = async () => {
    try {
      const response = await axios.get('http://localhost:3001/sales', {
        headers: { authorization: user.token },
      });
      setSales(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendSale = async (sale) => {
    console.log('sendsale', user.token);
    const {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productCart,
    } = sale;

    try {
      const response = await axios.post('http://localhost:3001/sales', {
        sellerId, totalPrice, deliveryAddress, deliveryNumber, productCart,
      }, {
        headers: { authorization: user.token },
      });

      console.log(response.data);

      setSaleId(response.data);
      const { id } = response.data;
      router.push(`/customer/orders/${id}`);
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
    getSales,
    setSales,
    sales,
    products,
    setUserInLocalStorage,
    productsCart,
    setProductsCart,
    loading,
    setProductCartInLocalStorage,
    sendSale,
    saleId,
    setSellersId,
    getSellersId,
    sellersId,
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

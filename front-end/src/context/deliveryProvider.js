import { shape } from 'prop-types';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import DeliveryContext from './deliveryContext';
import api from '../service/axiosApi';

export const DeliveryProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState({});

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const [address, setAddress] = useState({
    vendedor: '2',
    address: '',
    numero: '',
  });

  const getProductCallBack = useCallback(async () => {
    try {
      const response = await api.get('/products');
      setAllProducts(response.data.products);
      return response;
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getProductCallBack();
  }, [getProductCallBack]);

  const context = {
    userData,
    setUserData,
    allProducts,
    cart,
    setCart,
    products,
    setProducts,
    total,
    setTotal,
    address,
    setAddress,
  };

  return (
    <DeliveryContext.Provider value={ context }>
      { children }
    </DeliveryContext.Provider>
  );
};

DeliveryProvider.propTypes = {
  children: shape().isRequired,
};

export const useDeliveryContext = () => useContext(DeliveryContext);

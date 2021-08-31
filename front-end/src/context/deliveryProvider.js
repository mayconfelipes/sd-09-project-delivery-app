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

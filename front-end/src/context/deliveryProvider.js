import { shape } from 'prop-types';
import React, { useState, useContext } from 'react';
import DeliveryContext from './deliveryContext';

export const DeliveryProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState('deu bom');

  const context = {
    dataUser,
    setDataUser,
  };

  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
};

DeliveryProvider.propTypes = {
  children: shape().isRequired,
};

export const useDeliveryContext = () => useContext(DeliveryContext);

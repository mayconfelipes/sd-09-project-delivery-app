import { shape } from 'prop-types';
import React from 'react';
import DeliveryContext from './deliveryContext';

export default function DeliveryProvider({ children }) {
  const context = {};
  return (
    <DeliveryContext.Provider value={ context }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: shape().isRequired,
};

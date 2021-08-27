import { shape } from 'prop-types';
import React, { useState } from 'react';
import DeliveryContext from './deliveryContext';

export default function DeliveryProvider({ children }) {
  const [isTest, setTest] = useState();

  const context = {
    isTest,
    setTest,
  };

  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: shape().isRequired,
};

// export function useDeliveryContext() {
//   return useContext(DeliveryContext);
// }

import React, { createContext } from 'react';

const CustomerContext = createContext();

function Provider ({ children }) {
  return (
    <CustomerContext.Provider value={}>
      {children}
    </CustomerContext.Provider>
  )
}

export default Provider;


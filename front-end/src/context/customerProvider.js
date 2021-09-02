import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Customer from './customerContext';

function CustomerProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 1,
      name: 'Stella Artois',
      price: '11.00',
      urlimage: 'none',
      quantity: 2,
    },
  ]);

  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: 'Jeca Tatu',
    },
  ]);

  const [customer, setCustomer] = useState({
    email: 'brenno@gmail.com',
    name: 'Brenno Calado',
    role: 'customer',
    // eslint-disable-next-line max-len
    token: 'token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7ImlkIjo1LCJuYW1lIjoiQnJlbm5vIENhbGFkbyIsImVtYWlsIjoiYnJlbm5vQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJyb2xlIjoiY29zdHVtZXIifSwiX3ByZXZpb3VzRGF0YVZhbHVlcyI6eyJpZCI6NSwibmFtZSI6IkJyZW5ubyBDYWxhZG8iLCJlbWFpbCI6ImJyZW5ub0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIiwicm9sZSI6ImNvc3R1bWVyIn0sIl9jaGFuZ2VkIjp7fSwiX29wdGlvbnMiOnsiaXNOZXdSZWNvcmQiOmZhbHNlLCJfc2NoZW1hIjpudWxsLCJfc2NoZW1hRGVsaW1pdGVyIjoiIiwicmF3Ijp0cnVlLCJhdHRyaWJ1dGVzIjpbImlkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIl19LCJpc05ld1JlY29yZCI6ZmFsc2UsImlhdCI6MTYzMDUzOTE0MSwiZXhwIjoxNjMxMTQzOTQxfQ.jTkxr4VU3WjY5aRJp4O9lnIGkCEwWnd_eOS9oCSe2x4"',
  });

  const data = {
    customer,
    setCustomer,
    shoppingCart,
    setShoppingCart,
    sellers,
    setSellers,
  };
  return (
    <Customer.Provider value={ data }>
      {children}
    </Customer.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;

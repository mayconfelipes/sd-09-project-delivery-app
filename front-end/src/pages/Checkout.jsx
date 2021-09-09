// import React, { useContext } from 'react';
import React from 'react';
// import ProductsContext from '../context/ProductsContext';
import CheckoutTable from '../components/CheckoutTable';
import NavBarCustomer from '../components/navBarCustomer';
import '../styles/checkout.css';

function Checkout() {
  return (
    <div className="checkout-page">
      <NavBarCustomer textProp="checkout" />
      <CheckoutTable />
    </div>
  );
}

export default Checkout;

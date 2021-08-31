import React from 'react';

import OrderLIst from '../../components/checkout/OrderLIst';
import AddressDetails from '../../components/checkout/AddressDetails';
import './style.css';

const Checkout = () => (
  <div className="checkout-container">
    <header>
      <h1>HEADER</h1>
    </header>
    <div className="checkout-main-container">
      <OrderLIst />
      <AddressDetails />
    </div>
  </div>
);

export default Checkout;

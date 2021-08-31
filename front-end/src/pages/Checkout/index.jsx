import React from 'react';

import OrderLIst from '../../components/checkout/OrderLIst';
import AddressDetails from '../../components/checkout/AddressDetails';
import Header from '../../components/Header';
import './style.css';

const Checkout = () => (
  <div className="checkout-container">
    <header>
      <Header />
    </header>
    <div className="checkout-main-container">
      <OrderLIst />
      <AddressDetails />
    </div>
  </div>
);

export default Checkout;

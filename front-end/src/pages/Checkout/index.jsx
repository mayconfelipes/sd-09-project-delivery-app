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
      <h2>Finalizar pedidos</h2>
      <OrderLIst />
      <h2>Detalhes e Endereço para Entrega</h2>
      <AddressDetails />
    </div>
  </div>
);

export default Checkout;

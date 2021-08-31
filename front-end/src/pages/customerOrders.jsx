import React from 'react';
import NavBarCustomer from '../components/navBarCustomer';
import OrdersTag from '../components/ordersTag';

function CustomerProducts() {
  return (
    <div>
      <NavBarCustomer textProp="pedidos" />

      <OrdersTag testProp="customer" />
    </div>
  );
}

export default CustomerProducts;

import React from 'react';
import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import OrderHeader from '../components/OrderHeader';

const OrderDetail = () => {
  const a = '';
  return (
    <>
      <Header a={ a } />
      <h1>Detalhe do Pedido</h1>
      <OrderHeader />
      <CheckoutTable />
    </>
  );
};

export default OrderDetail;

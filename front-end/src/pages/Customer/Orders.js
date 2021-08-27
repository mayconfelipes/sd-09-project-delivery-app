import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_orders';

function Orders() {
  return (
    <section>
      <h1>MEUS PEDIDOS</h1>
      <p data-testid={ `${route}__element-order-id` }>order id</p>
      <p data-testid={ `${route}__delivery-status` }>delivery-status</p>
      <p data-testid={ `${route}__element-order-date` }>order date</p>
    </section>
  );
}

export default Orders;

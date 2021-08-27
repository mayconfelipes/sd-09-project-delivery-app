import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'seller_orders';

function Orders({ id }) {
  return (
    <section>
      <h1>PEDIDOS</h1>
      <p data-testid={ `${route}__element-order-${id}` }>order</p>
      <p data-testid={ `${route}__element-delivery-status-${id}` }>delivery status</p>
      <p data-testid={ `${route}__element-order-date${id}` }>order date</p>
      <p data-testid={ `${route}__element-card-price-${id}` }>card price</p>
      <p data-testid={ `${route}__element-card-address-${id}` }>card address</p>
    </section>
  );
}

Orders.propTypes = {
  id: number,
}.isRequired;

export default Orders;

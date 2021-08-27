import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createButton } from '../../utils/creators';

const route = 'customer_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  return (
    <section>
      <h1>DETALHES DO PEDIDO</h1>
      <p data-testid={ `${route}__${label}-order-id` }>order id</p>
      <p data-testid={ `${route}__${label}-seller-name` }>seller name</p>
      <p data-testid={ `${route}__${label}-order-date` }>order date</p>
      <p data-testid={ `${route}__${label}-delivery-status` }>delivery status</p>
      { createButton('delivery-check', 'delivery-check', () => {}, route) }
    </section>
  );
}

export default OrdersDetails;

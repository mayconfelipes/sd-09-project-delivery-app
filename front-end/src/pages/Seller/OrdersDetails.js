import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import { createButton } from '../../utils/creators';

const route = 'seller_order_details';

function OrdersDetails() {
  return (
    <section>
      <h1>DETALHES DO PEDIDO</h1>
      <p
        data-testid={ `${route}__element-order-details-label-delivery-status` }
      >
        delivery status
      </p>
      <p data-testid={ `${route}__element-order-details-label-order-date` }>order date</p>
      { createButton('preparing-check', 'preparing-check', () => {}, route) }
      { createButton('dispatch-check', 'dispatch-check', () => {}, route) }
      <p data-testid={ `${route}__element-order-total-price` }>total price</p>
    </section>
  );
}

export default OrdersDetails;

import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'seller_order_details';

function OrderDetailsTable() {
  return (
    <section>
      <h1>TABELA DE DETALHES DA VENDA</h1>
      <p data-testid={ `${route}__element-order-table-item-number-${id}` }>item number</p>
      <p data-testid={ `${route}__element-order-table-name-${id}` }>name</p>
      <p data-testid={ `${route}__element-order-table-quantity-${id}` }>quantity</p>
      <p data-testid={ `${route}__element-order-table-unit-price-${id}` }>unit price</p>
      <p data-testid={ `${route}__element-order-table-sub-total-${id}` }>sub total</p>

    </section>
  );
}

export default OrderDetailsTable;

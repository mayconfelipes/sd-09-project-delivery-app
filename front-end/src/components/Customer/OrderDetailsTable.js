import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_order_details';

function OrderDetailsTable({ id }) {
  return (
    <section>
      <h1>TABELA DE DETALHES DA VENDA</h1>
      <p data-testid={ `${route}__element-card-title-${id}` }>item-number</p>
      <p data-testid={ `${route}__element-order-table-name-${id}` }>name</p>
      <p data-testid={ `${route}__element-order-table-quantity-${id}` }>quantity</p>
      <p data-testid={ `${route}__element-order-table-sub-total-${id}` }>sub-total</p>
    </section>
  );
}

OrderDetailsTable.propTypes = {
  id: number,
}.isRequired;

export default OrderDetailsTable;

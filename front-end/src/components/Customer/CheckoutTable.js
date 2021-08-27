import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_checkout';

function CheckoutTable() {
  return (
    <section>
      <h1>TABELA DE CHECKOUT</h1>
      <p data-testid={ `${route}__element-order-table-item-number-${id}` }>item number</p>
      <p data-testid={ `${route}__element-order-table-name-${id}` }>name</p>
      <p data-testid={ `${route}__element-order-table-quantity-${id}` }>quantity</p>
      <p data-testid={ `${route}__element-order-table-unit-price-${id}` }>unit price</p>
      <p data-testid={ `${route}__element-order-table-sub-total-${id}` }>sub total</p>
      <p data-testid={ `${route}__element-order-table-remove-${id}` }>remove</p>

    </section>
  );
}

CheckoutTable.propTypes = {
  id: number,
}.isRequired;

export default CheckoutTable;

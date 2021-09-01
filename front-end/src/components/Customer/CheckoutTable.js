import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_checkout';

function CheckoutTable({ cart }) {
  return (
    <section>
      <h1>TABELA DE CHECKOUT</h1>
      <table>
        <tr>
          <th>item number</th>
          <th>name</th>
          <th>quantity</th>
          <th>unit price</th>
          <th>sub total</th>
          <th>remove</th>
        </tr>
        { cart.map(({ id, name, price, quantity }, index) => (
          <tr key={ id }>
            <td data-testid={ `${route}__element-order-table-item-number-${index}` }>
              { index + 1 }
            </td>
            <td data-testid={ `${route}__element-order-table-name-${index}` }>
              { name }
            </td>
            <td data-testid={ `${route}__element-order-table-quantity-${index}` }>
              { quantity }
            </td>
            <td data-testid={ `${route}__element-order-table-unit-price-${index}` }>
              { `${price}`.replace(/\./, ',') }
            </td>
            <td data-testid={ `${route}__element-order-table-sub-total-${index}` }>
              { `${(quantity * price).toFixed(2)}`.replace(/\./, ',') }
            </td>
            <td data-testid={ `${route}__element-order-table-remove-${index}` }>
              remove
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}

CheckoutTable.propTypes = {
  id: number,
}.isRequired;

export default CheckoutTable;

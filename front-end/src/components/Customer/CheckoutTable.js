import React from 'react';
import { number } from 'prop-types';
import { formatPrice } from '../../utils/format';

const route = 'customer_checkout';

function CheckoutTable({ cart, removeFn }) {
  return (
    <section>
      <h1>TABELA DE CHECKOUT</h1>
      <table>
        <thead>
          <tr>
            <th>item number</th>
            <th>name</th>
            <th>quantity</th>
            <th>unit price</th>
            <th>sub total</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
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
                { formatPrice(price) }
              </td>
              <td data-testid={ `${route}__element-order-table-sub-total-${index}` }>
                { formatPrice(quantity * price) }
              </td>
              <td>
                <button
                  data-testid={ `${route}__element-order-table-remove-${index}` }
                  type="button"
                  onClick={ () => removeFn(id) }
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

CheckoutTable.propTypes = {
  id: number,
}.isRequired;

export default CheckoutTable;

import React from 'react';
import { number } from 'prop-types';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';

const route = 'customer_order_details';

function OrderDetailsTable({ products }) {
  console.log(products);
  return (
    <table>
      { products.map(({ id, name, price, SalesProduct }, index) => (
        <tr key={ id }>
          <td data-testid={ `${route}__element-card-title-${index}` }>
            { index + 1 }
          </td>
          <td data-testid={ `${route}__element-order-table-name-${index}` }>
            { name }
          </td>
          <td data-testid={ `${route}__element-order-table-quantity-${index}` }>
            { SalesProduct.quantity }
          </td>
          <td data-testid={ `${route}__element-order-table-sub-total-${index}` }>
            { price * SalesProduct.quantity }
          </td>
        </tr>
      ))}
    </table>
  );
}

OrderDetailsTable.propTypes = {
  id: number,
}.isRequired;

export default OrderDetailsTable;

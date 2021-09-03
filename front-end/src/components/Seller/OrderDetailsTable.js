import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/format';

const route = 'seller_order_details';

function OrderDetailsTable({ products }) {
  return (
    <table>
      { products.map(({ id, name, price, SalesProduct }, index) => (
        <tr key={ id }>
          <td data-testid={ `${route}__element-order-table-item-number-${index}` }>
            { index + 1 }
          </td>
          <td data-testid={ `${route}__element-order-table-name-${index}` }>
            { name }
          </td>
          <td data-testid={ `${route}__element-order-table-quantity-${index}` }>
            { SalesProduct.quantity }
          </td>
          <td data-testid={ `${route}__element-order-table-unit-price-${index}` }>
            { formatPrice(price) }
          </td>
          <td data-testid={ `${route}__element-order-table-sub-total-${index}` }>
            { formatPrice(price * SalesProduct.quantity) }
          </td>
        </tr>
      ))}
    </table>
  );
}

OrderDetailsTable.propTypes = {
  item: PropTypes.shape(),
  index: PropTypes.number,
}.isRequired;

export default OrderDetailsTable;

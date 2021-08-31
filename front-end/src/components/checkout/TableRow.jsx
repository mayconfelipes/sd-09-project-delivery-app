import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ item, product }) => {
  const { name, unitPrice, quantity, subTotal } = product;
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${item}` }>
        { item + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${item}` }>
        { name }
      </td>
      <td data-testid={ `cutomer_checkout__element-order-table-quantity-${item}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${item}` }>
        { unitPrice }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${item}` }>
        { subTotal }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${item}` }>
        <button type="button">Remover</button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    quantity: PropTypes.number,
    subTotal: PropTypes.number,
  }).isRequired,
};

export default TableRow;

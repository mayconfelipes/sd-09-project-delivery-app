import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ item, product, onclick }) => {
  const { name, price, quantity } = product;
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
        { price }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${item}` }>
        { quantity * Number(price) }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${item}` }>
        <button type="button" onClick={ () => onclick(item) }>
          Remover
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.number.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default TableRow;

import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ item, product, onclick }) => {
  const { name, price, quantity } = product;
  const subTotal = (quantity * Number(price)).toFixed(2);
  const unitPrice = Number(price).toFixed(2).toString().replace(/\./, ',');

  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${item}` }>
        { item + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${item}` }>
        { name }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${item}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${item}` }>
        { `R$ ${unitPrice}` }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${item}` }>
        { `R$ ${subTotal.toString().replace(/\./, ',')}` }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${item}` }>
        <button className="btn-remover" type="button" onClick={ () => onclick(item) }>
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
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default TableRow;

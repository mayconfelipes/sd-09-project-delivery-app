import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsItem({ product, index }) {
  const { name, price, quantity } = product;
  return (
    <tr>
      <td
        className="order-details-order-item"
        data-testid={ `customer_order-details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        className="order-details-item-name"
        data-testid={ `customer_order-details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        className="order-details-item-quantity"
        data-testid={ `customer_order-details__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        className="order-details-item-unit-price"
        data-testid={ `customer_order-details__element-order-table-unit-price-${index}` }
      >
        { price.replace('.', ',') }
      </td>
      <td
        className="order-details-item-subtotal"
        data-testid={ `customer_order-details__element-order-table-sub-total-${index}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </td>
    </tr>
  );
}

OrderDetailsItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderDetailsItem;

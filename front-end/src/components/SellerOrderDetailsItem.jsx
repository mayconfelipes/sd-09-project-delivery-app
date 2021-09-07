import React from 'react';
import PropTypes from 'prop-types';

function SellerOrderDetailsItem({ product, index }) {
  const { name, price, quantity } = product;
  return (
    <tr>
      <td
        className="seller-order-details-order-item"
        data-testid={ `seller_order-details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        className="seller-order-details-item-name"
        data-testid={ `seller_order-details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        className="seller-order-details-item-quantity"
        data-testid={ `seller_order-details__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        className="seller-order-details-item-unit-price"
        data-testid={ `seller_order-details__element-order-table-unit-price-${index}` }
      >
        { price.replace('.', ',') }
      </td>
      <td
        className="seller-order-details-item-subtotal"
        data-testid={ `seller_order-details__element-order-table-sub-total-${index}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </td>
    </tr>
  );
}

SellerOrderDetailsItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SellerOrderDetailsItem;

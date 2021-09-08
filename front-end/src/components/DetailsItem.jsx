import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {
  const { cartItem: { nameProduct, priceProduct, quantity }, order } = props;

  const brazilianPrice = (value) => {
    const minN = 3;
    if (typeof value === 'number') value = value.toFixed(2);
    const newPrice = value.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };

  return (
    <li>
      <p
        data-testid={ `customer_order_details__element-order-table-item-number-${order}` }
      >
        {order + 1}
      </p>
      <p data-testid={ `customer_order_details__element-order-table-name-${order}` }>
        {nameProduct}
      </p>
      <p data-testid={ `customer_order_details__element-order-table-quantity-${order}` }>
        {quantity}
      </p>
      <p data-testid={ `customer_order_details__element-order-table-sub-total-${order}` }>
        {brazilianPrice(priceProduct)}
      </p>
      <p data-testid={ `customer_order_details__element-order-total-price-${order}` }>
        {brazilianPrice(parseFloat(priceProduct) * quantity)}
      </p>
    </li>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
}.isRequired;

export default CheckoutItem;

import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {
  const { cartItem: { totalProduct, price, quant, name }, order } = props;

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
        {name}
      </p>
      <p data-testid={ `customer_order_details__element-order-table-quantity-${order}` }>
        {quant}
      </p>
      <p data-testid={ `customer_order_details__element-order-table-sub-total-${order}` }>
        {brazilianPrice(price)}
      </p>
      <p data-testid="customer_order_details__element-order-total-price">
        {brazilianPrice(totalProduct)}
      </p>
    </li>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
}.isRequired;

export default CheckoutItem;

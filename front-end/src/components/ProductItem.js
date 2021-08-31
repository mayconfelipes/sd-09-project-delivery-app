import React from 'react';
import PropTypes from 'prop-types';

export default function productItem({ product, index }) {
  const removeProduct = () => true;

  const {
    id,
    name,
    quantity,
    price,
  } = product;
  return (
    <div className="">
      <span
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { id }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        R$
        { price }
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-subtotal-${index}` }
      >
        R$
        { price * quantity }
      </span>
      <button
        type="button"
        onClick={ removeProduct }
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        Remover
      </button>
    </div>
  );
}

productItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

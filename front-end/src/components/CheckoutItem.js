import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Customer from '../context/customerContext';

export default function CheckoutItem({ product, index }) {
  const { shoppingCart, setShoppingCart } = useContext(Customer);

  const removeProduct = () => {
    const newCart = shoppingCart.filter((item, listIndex) => listIndex !== index);
    setShoppingCart(newCart);
  };

  const {
    name,
    quantity,
    price,
  } = product;
  return (
    <>
      <span
        className="secondary grow-1"
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </span>
      <span
        className="light-background grow-3"
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </span>
      <span
        className="primary grow-1"
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </span>
      <span
        className="ternary grow-1"
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        R$
        { price }
      </span>
      <span
        className="quaternary grow-1"
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        R$
        { price * quantity }
      </span>
      <button
        className="secondary grow-1"
        type="button"
        onClick={ removeProduct }
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        Remover
      </button>
    </>
  );
}

CheckoutItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

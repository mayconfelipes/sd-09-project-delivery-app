import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';

function CheckoutItem({ orderItem, index }) {
  const { removeItemFromCart } = useContext(ProductsContext);
  const { name, price, quantity } = orderItem;
  return (
    <div className="checkout-item-container">
      <div className="checkout-order-item">
        <span
          className="checkout-item-index"
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          { index + 1}
        </span>
        <span
          className="checkout-item-name"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          { name }
        </span>
        <span
          className="checkout-item-quantity"
          data-testid={ `cutomer_checkout__element-order-table-quantity-${index}` }
        >
          { quantity }
        </span>
        <span
          className="checkout-item-unit-price"
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          { price }
        </span>
        <span
          className="checkout-item-subtotal"
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          { price * quantity }
        </span>
        <button
          type="button"
          className="checkout-remove-item-button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ () => removeItemFromCart(index) }
        >
          REMOVER
        </button>
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  orderItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutItem;

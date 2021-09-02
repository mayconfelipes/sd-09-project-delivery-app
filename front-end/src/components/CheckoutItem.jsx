import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../context/ProductsContext';

function CheckoutItem({ orderItem, index }) {
  const { removeItemFromCart } = useContext(ProductsContext);
  const { name, price, quantity } = orderItem;
  return (
    <tr>
      <td
        className="checkout-order-item"
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        className="checkout-item-name"
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        className="checkout-item-quantity"
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        className="checkout-item-unit-price"
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { price.replace('.', ',') }
      </td>
      <td
        className="checkout-item-subtotal"
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </td>
      <td
        className="checkout-remove-item-button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button
          type="button"
          onClick={ () => removeItemFromCart(index) }
        >
          REMOVER
        </button>
      </td>
    </tr>
  // </table>
    // </div>
  );
}

CheckoutItem.propTypes = {
  orderItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutItem;

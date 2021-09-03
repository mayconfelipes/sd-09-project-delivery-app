import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Customer from '../context/customerContext';
import Seller from '../context/sellerContext';

export default function CheckoutItem({ product, index, role }) {
  const { shoppingCart, setShoppingCart } = useContext(
    role === 'customer' ? Customer : Seller,
  );

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
    <tr>
      <td
        className="secondary grow-1"
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        className="light-background grow-3"
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        className="primary grow-1"
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </td>
      <td
        className="ternary grow-1"
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        R$
        { `${(Math.round(price * 100) / 100).toFixed(2)}`
          .split('.').join(',') }
      </td>
      <td
        className="quaternary grow-1"
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        R$
        { `${(Math.round((price * quantity) * 100) / 100).toFixed(2)}`
          .split('.').join(',') }
      </td>
      { role === 'customer'}
      <td>
        <button
          className="secondary grow-1"
          type="button"
          onClick={ removeProduct }
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          Remover
        </button>
      </td>
    </tr>
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
  role: PropTypes.string.isRequired,
};

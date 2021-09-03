import React from 'react';
import PropTypes from 'prop-types';

export default function CartItems(props) {
  const {
    cartItem: {
      id,
      nameAndQuantityInMl,
      price,
      quantity,
    },
    index,
    setCurrentCart,
    currentCart,
    setCurrentTotalPrice,
  } = props;

  const removeItem = () => {
    const newCart = currentCart.filter((item) => item.id !== id);
    let newTotalPrice = 0;
    newCart.forEach((item) => {
      newTotalPrice += Number(item.price) * Number(item.quantity);
    });
    localStorage.setItem('productsAdded', JSON.stringify(newCart));
    localStorage.setItem('totalPrice', newTotalPrice.toFixed(2));

    setCurrentCart(newCart.length === 0 ? [] : newCart);
    setCurrentTotalPrice(newTotalPrice.toFixed(2));
  };

  return (
    <div
      style={ { display: 'flex', justifyContent: 'space-evenly' } }
    >
      <div
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {nameAndQuantityInMl}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {price.split('.').join(',')}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {(price * quantity).toFixed(2).split('.').join(',')}
      </div>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ removeItem }
      >
        REMOVER
      </button>
    </div>
  );
}

CartItems.propTypes = {
  cartItem: PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.number,
    nameAndQuantityInMl: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setCurrentCart: PropTypes.func.isRequired,
  setCurrentTotalPrice: PropTypes.func.isRequired,
  currentCart: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.number,
    nameAndQuantityInMl: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

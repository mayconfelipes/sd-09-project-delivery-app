import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {
  const { cartItem: { totalProduct, price, quant, name },
    cartItens, setCartItens, order } = props;

  const removeOrder = () => {
    const newItens = cartItens.filter((item) => item.item.name !== name);
    console.log(newItens, 'NOVO ITENS');
    setCartItens(newItens);
  };
  return (
    <li>
      <p data-testid={ `customer_checkout__element-order-table-item-number-${order}` }>
        {order}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${order}` }>{name}</p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${order}` }>
        {quant}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-unit-price-${order}` }>
        {price}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-sub-total-${order}` }>
        {totalProduct}
      </p>
      <button
        type="button"
        onClick={ removeOrder }
        data-testid={ `customer_checkout__element-order-table-remove-${order}` }
      >
        Remover
      </button>
    </li>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
}.isRequired;

export default CheckoutItem;

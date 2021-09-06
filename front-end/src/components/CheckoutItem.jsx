import React from 'react';
import PropTypes from 'prop-types';

const CheckoutItem = (props) => {
  const { cartItem: { totalProduct, price, quant, name },
    cartItens, setCartItens, order, setTotalPrice } = props;

  const removeOrder = () => {
    const newItens = cartItens.filter((item) => item.item.name !== name);
    setCartItens(newItens);
    const currPrice = newItens.reduce(
      (acc, curr) => acc + curr.item.totalProduct, 0,
    ).toFixed(2);
    setTotalPrice(currPrice);
  };
  const brazilianPrice = (value) => {
    const minN = 3;
    if (typeof value === 'number') value = value.toFixed(2);
    const newPrice = value.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };
  return (
    <li>
      <p data-testid={ `customer_checkout__element-order-table-item-number-${order}` }>
        {order + 1}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${order}` }>{name}</p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${order}` }>
        {quant}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-unit-price-${order}` }>
        {brazilianPrice(price)}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-sub-total-${order}` }>
        {brazilianPrice(totalProduct)}
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

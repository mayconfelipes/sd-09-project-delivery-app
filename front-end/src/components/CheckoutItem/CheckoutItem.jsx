import React from 'react';
import PropTypes from 'prop-types';
import './CheckoutItem.css';

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
    <div className="main-checkout-item">
      <p
        className="checkout-id"
        data-testid={ `customer_checkout__element-order-table-item-number-${order}` }
      >
        {order + 1}
      </p>
      <p
        className="checkout-name"
        data-testid={ `customer_checkout__element-order-table-name-${order}` }
      >
        {name}
      </p>
      <p
        className="checkout-quantity"
        data-testid={ `customer_checkout__element-order-table-quantity-${order}` }
      >
        {`(${quant})`}
      </p>
      <p
        className="checkout-individual-price"
        data-testid={ `customer_checkout__element-order-table-unit-price-${order}` }
      >
        {` x ${brazilianPrice(price)} = `}
      </p>
      <p
        className="checkout-total-price"
        data-testid={ `customer_checkout__element-order-table-sub-total-${order}` }
      >
        {brazilianPrice(totalProduct)}
      </p>
      <button
        className="checkout-item-button"
        type="button"
        onClick={ removeOrder }
        data-testid={ `customer_checkout__element-order-table-remove-${order}` }
      >
        <p className="checkout-item-button-text">Remover</p>
      </button>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
}.isRequired;

export default CheckoutItem;

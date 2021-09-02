import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import './CheckoutCard.css';

const CheckoutCard = ({ cart, setCart }) => {
  const removeProduct = ({ target }) => {
    const newCart = cart.filter((element) => {
      const currProdId = target.getAttribute('curr-prod-id');
      return element.id !== Number(currProdId);
    });
    setCart(newCart);
  };
  const orderTotalPrice = useRef();
  return (
    <div className="CheckoutCard-wrapper-table">
      <table className="CheckoutCard-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { element.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { element.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { String(element.price.toFixed(2)).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { String((Number(element.price) * Number(element.quantity)).toFixed(2))
                  .replace('.', ',') }
              </td>
              <button
                curr-prod-id={ element.id }
                onClick={ removeProduct }
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                Remover
              </button>
            </tr>
          )) }
        </tbody>
      </table>
      <h4
        ref={ orderTotalPrice }
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total Price: 
        ${String((cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
      .toFixed(2)))
      .replace('.', ',')
    }` }
      </h4>
    </div>
  );
};

CheckoutCard.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CheckoutCard;

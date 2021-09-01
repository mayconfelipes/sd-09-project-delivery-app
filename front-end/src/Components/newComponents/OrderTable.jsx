import { string, number, shape, func } from 'prop-types';
import React from 'react';

export default function OrderTable({ cartItems, setCartItems, totalPrice }) {
  return (
    <>
      <table>
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
          {cartItems.map(({ id, name, quantity, price }, i) => (
            <tr key={ id }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {id}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${name}` }
              >
                {name}
              </td>
              <td
                data-testid={ `cutomer_checkout__element-order-table-quantity-${i}` }
              >
                {quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                {price}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                {quantity * price}
              </td>
              <td>
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                  onClick={ () => setCartItems(cartItems
                    .filter((item) => item.id !== id)) }
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        {/**
         * Na verdade, aqui será colocao o totalPrice
         * a lógica de soma será feita em outro lugar
         */}
        Total:
        {totalPrice}
        {` R$ ${cartItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0,
        )}`}
      </div>
    </>
  );
}

OrderTable.propTypes = {
  cartItems: shape({
    id: number,
    name: string,
    quantity: number,
    price: number,
  }),
  setCartItems: func,
  totalPrice: number,
}.isRequired;

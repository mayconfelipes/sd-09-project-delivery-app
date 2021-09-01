import React, { useContext, useEffect } from 'react';
import CheckoutItem from './CheckoutItem';
import Customer from '../context/customerContext';
import useTotalPrice from '../hooks/utils/useTotalPrice';

export default function CheckouTable() {
  const {
    shoppingCart,
  } = useContext(Customer);

  const [totalPrice, setTotalPrice] = useTotalPrice();

  useEffect(() => {
    setTotalPrice(shoppingCart);
  }, [shoppingCart, setTotalPrice]);

  return (
    <table>
      <thead className="cart-row">
        <tr>
          <th className="grow-1">Item</th>
          <th className="grow-3">Descrição</th>
          <th className="grow-1">Quantidade</th>
          <th className="grow-1">Valor Unitário</th>
          <th className="grow-1">Sub-total</th>
          <th className="grow-1">Remover Item</th>
        </tr>
      </thead>
      <tbody className="cart-row">
        {shoppingCart.length ? shoppingCart.map((product, index) => (
          <CheckoutItem key={ product.id } index={ index } product={ product } />
        )) : 'Apenas teias de aranha em seu carrinho...'}
        <tr
          data-testid="customer_checkout__element-order-total-price"
        >
          <td>
            {`Total: R$ ${totalPrice}`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

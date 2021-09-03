import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import CheckoutItem from './CheckoutItem';
import Customer from '../context/customerContext';
import Seller from '../context/sellerContext';
import useTotalPrice from '../hooks/utils/useTotalPrice';

export default function CheckoutTable() {
  const History = useHistory();
  const context = useContext(History.location.pathname === 'customer'
    ? Customer : Seller);
  const { shoppingCart } = context;

  const [totalPrice, setTotalPrice] = useTotalPrice();

  useEffect(() => {
    setTotalPrice(shoppingCart);
  }, [shoppingCart, setTotalPrice]);

  return (
    <table>
      <thead>
        <tr>
          <th className="grow-1">Item</th>
          <th className="grow-3">Descrição</th>
          <th className="grow-1">Quantidade</th>
          <th className="grow-1">Valor Unitário</th>
          <th className="grow-1">Sub-total</th>
          <th className="grow-1">Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {shoppingCart.length ? shoppingCart.map((product, index) => (
          <CheckoutItem key={ product.id } index={ index } product={ product } />
        )) : <tr><td>Apenas teias de aranha em seu carrinho...</td></tr>}
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

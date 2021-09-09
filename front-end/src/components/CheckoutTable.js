import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import CheckoutItem from './CheckoutItem';
import Customer from '../context/customerContext';
import Seller from '../context/sellerContext';
import useTotalPrice from '../hooks/utils/useTotalPrice';

export default function CheckoutTable() {
  const History = useHistory();
  const path = History.location.pathname.split('/');
  const role = path[1];
  const page = path[2];
  const context = useContext(role === 'customer'
    ? Customer : Seller);
  console.log(context);
  const { shoppingCart } = context;

  const [totalPrice, setTotalPrice] = useTotalPrice();

  useEffect(() => {
    setTotalPrice(shoppingCart, page);
  }, [shoppingCart, setTotalPrice, page]);

  return (
    <table>
      <thead>
        <tr>
          <th className="grow-1">Item</th>
          <th className="grow-3">Descrição</th>
          <th className="grow-1">Quantidade</th>
          <th className="grow-1">Valor Unitário</th>
          <th className="grow-1">Sub-total</th>
          { page === 'checkout' && <th className="grow-1">Remover Item</th>}
        </tr>
      </thead>
      <tbody>
        {shoppingCart.length ? shoppingCart.map((product, index) => (
          <CheckoutItem
            key={ product.id }
            index={ index }
            product={ product }
            role={ role }
            page={ page }
          />
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

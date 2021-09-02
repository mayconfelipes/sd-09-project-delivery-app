import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import CartTotal from './CartTotal';
import ConfirmOrderButton from './ConfirmOrderButton';
import OrderAddress from './OrderAddress';
import ProductsContext from '../context/ProductsContext';

function CheckoutTable() {
  const { currentOrder } = useContext(ProductsContext);

  return (
    <div>
      <table>
        Seu carrinho
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
          <th>Remover do Carrinho</th>
        </tr>
        <tbody>
          { currentOrder.length === 0 ? <span>Seu carrinho está vazio</span>
            : currentOrder.map((order, index) => (
              <CheckoutItem orderItem={ order } index={ index } key={ index } />)) }
        </tbody>
      </table>
      <CartTotal
        testId="customer_checkout__element-order-total-price"
        text="Total do pedido"
        className=""
      />
      <OrderAddress />
      <ConfirmOrderButton />
      <Link to="/customer/products">Voltar</Link>
    </div>);
}

export default CheckoutTable;

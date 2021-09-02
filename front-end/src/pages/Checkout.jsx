import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import CartTotal from '../components/CartTotal';
import OrderAddress from '../components/OrderAddress';
import ConfirmOrderButton from '../components/ConfirmOrderButton';
import ProductsContext from '../context/ProductsContext';

function Checkout() {
  const { currentOrder } = useContext(ProductsContext);
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
          <th>Remover do Carrinho</th>
        </tr>
        Seu carrinho
        { currentOrder.map((order, index) => (
          <CheckoutItem orderItem={ order } index={ index } key={ index } />)) }
      </table>
      <CartTotal
        testId="customer_checkout__element-order-total-price"
        text="Total do pedido"
        className=""
      />
      <OrderAddress />
      <ConfirmOrderButton />
      <Link to="/customer/products">Voltar</Link>
    </div>
  );
}

export default Checkout;

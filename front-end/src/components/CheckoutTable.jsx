import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItem from './CheckoutItem';
import CartTotal from './CartTotal';
import ConfirmOrderButton from './ConfirmOrderButton';
import OrderAddress from './OrderAddress';
import ProductsContext from '../context/ProductsContext';

function CheckoutTable() {
  const { currentOrder } = useContext(ProductsContext);

  const tableHead = () => (
    <thead>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Subtotal</th>
        <th>Remover do Carrinho</th>
      </tr>
    </thead>
  );

  return currentOrder.length === 0
    ? (
      <div className="empty-cart">
        <h1>Seu carrinho está vazio</h1>
        <Link to="/customer/products">Voltar para página de produtos</Link>
      </div>)
    : (
      <div className="cart">
        <div className="cart-details">
          <table>
            <colgroup>
              <col width="40px" />
              <col />
              <col width="120px" />
              <col width="120px" />
              <col width="120px" />
              <col width="150px" />
            </colgroup>
            { tableHead() }
            <tbody>
              { currentOrder.map((order, index) => (
                <CheckoutItem orderItem={ order } index={ index } key={ index } />)) }
            </tbody>
          </table>
          <CartTotal
            testId="customer_checkout__element-order-total-price"
            text="Total: R$ "
            className="cart-total"
          />
        </div>
        <div className="delivery-details">
          <OrderAddress />
          <ConfirmOrderButton />
          <Link to="/customer/products">Voltar</Link>
        </div>
      </div>);
}

export default CheckoutTable;

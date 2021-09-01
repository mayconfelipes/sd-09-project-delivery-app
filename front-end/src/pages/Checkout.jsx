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
      Seu carrinho
      { currentOrder.map((order, index) => (
        <CheckoutItem orderItem={ order } index={ index } key={ index } />)) }
      <CartTotal />
      <OrderAddress />
      <ConfirmOrderButton />
      <Link to="/customer/products">Voltar</Link>
    </div>
  );
}

export default Checkout;

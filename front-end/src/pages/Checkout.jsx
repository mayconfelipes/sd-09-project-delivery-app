import React, { useContext } from 'react';
// import React from 'react';
import CheckoutItem from '../components/CheckoutItem';
import CartTotal from '../components/CartTotal';
import OrderAddress from '../components/OrderAddress';
import ConfirmOrderButton from '../components/ConfirmOrderButton';
import context from '../services/context';

function Checkout() {
  const { currentOrder } = useContext(context);
  return (
    <div>
      { currentOrder.map((order, index) => (
        <CheckoutItem orderItem={ order } index={ index } key={ index } />)) }
      <CartTotal />
      <OrderAddress />
      <ConfirmOrderButton />
    </div>
  );
}

export default Checkout;

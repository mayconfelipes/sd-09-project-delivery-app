import React from 'react';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const cartItens = JSON.parse(localStorage.getItem('cart'));
  const totalPrice = cartItens.price * cartItens.quantity;
  return (
    <div>
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        {`Ver carrinho: R$${totalPrice}`}
      </Link>
    </div>
  );
};

export default CartButton;

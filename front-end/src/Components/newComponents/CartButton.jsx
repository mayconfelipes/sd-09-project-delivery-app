import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

function CartButton() {
  const { totalPrice } = useCart();

  return (
    <button type="button" disabled data-testid="customer_products__button-cart">
      <Link to="customer/checkout">
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {` ${totalPrice}`}
        </span>
      </Link>
    </button>
  );
}

export default CartButton;

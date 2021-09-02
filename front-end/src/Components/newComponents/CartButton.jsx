import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';

function CartButton() {
  const { totalPrice } = useCart();
  const convertDotToComma = (string) => string.replace(/\./g, ',');
  const price = convertDotToComma(parseFloat(totalPrice).toFixed(2));

  const isTotalPriceZero = totalPrice === 0;

  return (
    <button
      type="button"
      disabled={ isTotalPriceZero }
      data-testid="customer_products__button-cart"
    >
      <Link to="checkout">
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {` ${price}`}
        </span>
      </Link>
    </button>
  );
}

export default CartButton;

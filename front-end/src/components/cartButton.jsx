import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';

const CartButton = () => {
  const { order } = useContext(ProductsContext);

  const newOrder = [...order];

  let localValue = 0;

  const calcTotal = () => {
    if (!newOrder) return localValue;

    if (newOrder) {
      localValue = newOrder.reduce(
        (acc, cur) => acc + (cur.quantity * cur.price), 0,
      );
    }
  };

  useEffect(() => {
    calcTotal();
  }, []);

  return (
    <div>
      <Link to="/customer/checkout">
        <button
          type="button"
          className="ver_carrinho"
          data-testid="customer_products__button-cart"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            { localValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }) }
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartButton;

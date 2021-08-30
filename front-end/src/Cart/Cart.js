import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart
        .reduce((acc, val) => acc + val.quantity * val.price, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <button
      className="cart-button"
      type="button"
      onClick={ () => history.push('/customer/checkout') }
      data-testid="customer_products__button-cart"
      disabled={ total === 0 }
    >
      Ver carrinho:
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { String(total.toFixed(2)).replace('.', ',') }
      </span>
    </button>
  );
};

export default Cart;

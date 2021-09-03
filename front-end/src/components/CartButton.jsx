import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import '../styles/buttons.css';
import Context from '../context/Context';

export default function Button({ ...rest }) {
  const { products } = useContext(Context);

  const history = useHistory();

  const [total, setTotal] = useState(
    products.reduce((acc, { price, quantity }) => acc + quantity * Number(price), 0),
  );

  useEffect(
    () => {
      const updatedTotal = products
        .reduce((acc, { price, quantity }) => acc + quantity * Number(price), 0);
      localStorage.setItem('products', JSON.stringify(products));
      setTotal(updatedTotal);
    }, [products],
  );

  localStorage.setItem('total', total);

  return (
    <button
      type="button"
      { ...rest }
      onClick={ () => history.push('/customer/checkout') }
      disabled={ !products.length }
    >
      Ver carrinho:
      <span data-testid="customer_products__checkout-bottom-value">
        {
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
            .format(total)
        }
      </span>
    </button>
  );
}

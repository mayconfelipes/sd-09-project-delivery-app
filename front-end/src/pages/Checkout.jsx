import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import CheckoutTable from '../components/CheckoutTable';

function Checkout() {
  const { currentOrderTotal } = useContext(ProductsContext);

  return currentOrderTotal > 0 ? <CheckoutTable /> : <h1>Seu carrinho está vazio</h1>;
}

export default Checkout;

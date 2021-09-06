import React from 'react';
import Navbar from '../../components/navbar';

const SellerOrders = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PEDIDOS /customer_products__element-navbar-link-orders',
  ];
  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <h1>Bora...</h1>
    </div>
  );
};

export default SellerOrders;

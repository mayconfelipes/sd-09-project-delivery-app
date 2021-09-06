import React from 'react';
import Navbar from '../../components/navbar';

const Order = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PRODUTOS /customer_products__element-navbar-link-products',
    'MEUS PEDIDOS/customer_products__element-navbar-link-orders',
  ];
  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
    </div>
  );
};

export default Order;

import React from 'react';
import Navbar from '../../components/navbar';
import CardProduct from '../../components/cardProduct';

const Products = () => {
  const paginas = [
    'PRODUTOS /customer_products__element-navbar-link-products',
    'MEUS PEDIDOS/customer_products__element-navbar-link-orders',
  ];
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <h1>Produtos</h1>
      <CardProduct />
    </div>
  );
};

export default Products;

import React from 'react';
import Navbar from '../../components/navbar';
import OrderTable from '../../components/orderTable';
import FormAdressFull from '../../components/formAdressFull';

const CheckOut = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PRODUTOS *customer_products__element-navbar-link-products */customer/products',
    'MEUS PEDIDOS*customer_products__element-navbar-link-orders */customer/orders',
  ];

  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <OrderTable />
      <FormAdressFull />
    </div>
  );
};

export default CheckOut;

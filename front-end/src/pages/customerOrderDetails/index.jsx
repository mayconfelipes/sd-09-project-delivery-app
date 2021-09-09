import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import { getOrderById } from '../../services/fetchApi';

const CustomerOrderDetails = () => {
  const [order, setOrder] = useState([]);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PRODUTOS *customer_products__element-navbar-link-products */customer/products',
    'MEUS PEDIDOS*customer_products__element-navbar-link-orders */customer/orders',
  ];
  const getOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const pathName = window.location.pathname;
    console.log(order, setOrder);

    console.log(pathName);
    const ordered = getOrderById(token);
    console.log(ordered);
  };

  useEffect(() => {
    getOrder();
  });

  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <h1>Bora</h1>
    </div>
  );
};

export default CustomerOrderDetails;

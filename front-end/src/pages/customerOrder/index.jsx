import React, { useEffect, useContext } from 'react';
import Navbar from '../../components/navbar';
import Context from '../../context';
import { getAllPurchases } from '../../services/fetchApi';
import OrderList from '../../components/orderList';

const Order = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PRODUTOS */customer_products__element-navbar-link-products */customer/products',
    'MEUS PEDIDOS */customer_products__element-navbar-link-orders */customer/orders',
  ];

  const { setAllSales } = useContext(Context);

  const getPurchases = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const result = await getAllPurchases(token);
    setAllSales(result);
  };

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <OrderList />
    </div>
  );
};

export default Order;

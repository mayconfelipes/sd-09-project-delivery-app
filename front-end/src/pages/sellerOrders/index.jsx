import React, { useEffect, useContext } from 'react';
import Navbar from '../../components/navbar';
import { getAllSales } from '../../services/fetchApi';
import Context from '../../context';
import OrderList from '../../components/orderList';

const SellerOrders = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const paginas = [
    'PEDIDOS *customer_products__element-navbar-link-orders*/seller/orders',
  ];

  const { setAllSales } = useContext(Context);

  const getSales = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const result = await getAllSales(token);
    setAllSales(result);
    console.log(result);
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <h1>Bora...</h1>
      <OrderList />
    </div>
  );
};

export default SellerOrders;

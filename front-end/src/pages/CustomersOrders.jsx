import React, { useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import OrderCard from '../components/OrderCard';
import NavBarCustomer from '../components/navBarCustomer';
import ProductsContext from '../context/ProductsContext';
import '../styles/CustomersOrders.css';

import * as api from '../services/api';

const socket = io('http://localhost:3001');

function CustomersOrders() {
  // const { userInfo, allUsersOrders, setUsersOrders } = useContext(context);
  const { userInfo, setAllOrders, allOrders } = useContext(ProductsContext);

  async function getAllOrders() {
    const orders = await api.getOrders(userInfo.token);
    setAllOrders(orders);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  socket.on('updateOrderStatus', () => {
    getAllOrders();
  });

  return (
    <div className="customer-orders-page">
      <NavBarCustomer textProp="pedidos" />
      <div className="orders-list">
        { allOrders.map((order) => (
          <OrderCard
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </div>
  );
}

export default CustomersOrders;

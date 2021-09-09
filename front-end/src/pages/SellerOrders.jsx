import React, { useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import SellerOrderCard from '../components/SellerOrderCard';
import NavBarSeller from '../components/navBarSeller';
import ProductsContext from '../context/ProductsContext';
import '../styles/SellerOrders.css';

import * as api from '../services/api';

const socket = io('http://localhost:3001');

function SellerOrders() {
  const { setUserInfo, setAllOrders, allOrders } = useContext(ProductsContext);

  async function getAllOrders() {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserInfo(user);
    const orders = await api.getSales(user.token);
    setAllOrders(orders);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  socket.on('updateOrderStatus', () => {
    getAllOrders();
  });

  socket.on('newOrder', () => {
    getAllOrders();
  });

  return (
    <div className="seller-orders-page">
      <NavBarSeller />
      <div className="seller-orders-list">
        { allOrders.map((order) => (
          <SellerOrderCard
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </div>
  );
}

export default SellerOrders;

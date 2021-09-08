import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import { getOrders } from '../services/api';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  const seller = {
    token: user.token,
    email: user.email,
  };

  useEffect(() => {
    getOrders(seller, setOrders);
  }, []);

  const sellerOrders = () => (
    <main>
      <div>
        <Navbar userType="seller" userName="Fulana Pereira" />
        { orders && orders.map((order) => (
          <OrderCard
            key={ order.id }
            id={ order.id }
            totalPrice={ order.total_price }
            status={ order.status }
            deliveryAddress={ order.delivery_address }
            deliveryNumber={ order.delivery_number }
            saleDate={ order.sale_date }
          />
        ))}
      </div>
    </main>
  );

  return (
    sellerOrders()
  );
};

export default SellerOrders;

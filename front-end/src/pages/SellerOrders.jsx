import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import OrderCard from '../components/OrderCard';
import { getOrders } from '../services/api';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const seller = {
    token: user.token,
    email: user.email,
  };

  useEffect(() => {
    getOrders(seller, setOrders, setError);
  }, []);

  const sellerOrders = () => (
    <>
      <Navbar userType="seller" userName="Fulana Pereira" />
      <main className="card-main">
        { error && <h1>{ error }</h1> }
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
      </main>
    </>
  );

  return (
    sellerOrders()
  );
};

export default SellerOrders;

import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrderInfo = async () => {
    const response = await fetch('http://localhost:3001/customer/orders');
    const ordersInfo = await response.json();
    setOrders(ordersInfo);
  };

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  return (
    <div>
      <NavBar />
      {orders ? orders.map((order) => (<OrderCard
        key={ order.id }
        orderInfo={ order }
      />))
        : <Loading />}
    </div>
  );
};

export default Orders;

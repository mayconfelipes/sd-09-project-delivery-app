import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import connectBack from '../../utills/axiosConfig';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    connectBack.post('/customer/ordersAll', { email })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);
  return (
    <div>
      <NavBar />
      {orders.length >= 1 ? orders
        .map((order) => (<OrderCard
          key={ order.id }
          order={ order }
        />))
        : <Loading />}
    </div>
  );
};

export default Orders;

import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import connectBack from '../../utills/axiosConfig';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    connectBack.get('/customer/orders', { email })
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOrders();
  }, [orders]);
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

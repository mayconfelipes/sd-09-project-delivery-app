import React, { useEffect, useState } from 'react';
import CardOrderList from '../../components/CardOrderList';
import api from '../../service/axiosApi';

const OrdersSeller = () => {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log('Eu te odeio ESLINT');
    console.log(token);
    api.get('/orders', { headers: { authorization: token } })
      .then((resp) => setOrders(resp.data));
  }, [token]);

  return (
    <div className="order-details-container">
      <p>lista de vendas</p>
      { orders.map((order, index) => <CardOrderList order={ order } key={ index } />) }
    </div>
  );
};

export default OrdersSeller;

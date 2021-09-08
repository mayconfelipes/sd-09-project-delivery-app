import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import CardOrder from '../components/CardOrder';
import '../styles/Orders.css';

export default function Orders() {
  const [order, setOrder] = useState([]);
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));
  const { token } = userData;

  useEffect(
    () => {
      const ORDERS_ENDPOINT = 'http://localhost:3001/api/sales';
      const fetchOrders = async () => {
        const config = { headers: { Authorization: `${token}` } };
        await axios.get(ORDERS_ENDPOINT, config)
          .then((d) => setOrder(d.data));
      };
      fetchOrders();
    }, [token],
  );

  return (
    <main>
      <Header />
      <section>
        {order.map((Item) => <CardOrder key={ Item.id } venda={ Item } />)}
      </section>
    </main>
  );
}

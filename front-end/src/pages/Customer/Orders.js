import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getAllSales } from '../../services/api';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'customer_orders';

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSales();
      setOrders(data.filter(({ userId }) => userId === user.id));
    };
    fetchData();
  }, []);

  return (
    <section>
      <Navbar />
      <h1>MEUS PEDIDOS</h1>
      { orders.map(({ id, totalPrice, saleDate, status }) => (
        <Link key={ id } to={ `/customer/orders/${id}` }>
          <p data-testid={ `${route}__element-order-id-${id}` }>{ id }</p>
          <p data-testid={ `${route}__element-delivery-status-${id}` }>{ status }</p>
          <p data-testid={ `${route}__element-order-date-${id}` }>
            { formatDate(saleDate) }
          </p>
          <p data-testid={ `${route}__element-card-price-${id}` }>
            { formatPrice(totalPrice) }
          </p>
        </Link>
      )) }
    </section>
  );
}

export default Orders;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getAllSales } from '../../services/api';

const route = 'customer_orders';

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSales();
      console.log(data);
      setOrders(data.filter(({ userId }) => userId === user.id));
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>MEUS PEDIDOS</h1>
      { orders.map(({ id, totalPrice, saleDate, status }) => (
        <Link key={ id } to={ `/customer/orders/${id}` }>
          <p data-testid={ `${route}__element-order-id-${id}` }>{ id }</p>
          <p data-testid={ `${route}__element-delivery-status-${id}` }>{ status }</p>
          <p data-testid={ `${route}__element-order-date-${id}` }>
            { moment(saleDate).format('DD/MM/yyyy') }
          </p>
          <p data-testid={ `${route}__element-card-price-${id}` }>
            { `${totalPrice}`.replace(/\./, ',') }
          </p>
        </Link>
      )) }
    </section>
  );
}

export default Orders;

import React, { useEffect, useState } from 'react';
import moment from 'moment';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
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
      { orders.map(({ id, saleDate, status }) => (
        <div key={ id }>
          <p data-testid={ `${route}__element-order-id-${id}` }>{ id }</p>
          <p data-testid={ `${route}__element-delivery-status-${id}` }>{ status }</p>
          <p data-testid={ `${route}__element-order-date-${id}` }>
            { moment(saleDate).format('DD/MM/yyyy') }
          </p>
        </div>
      )) }
    </section>
  );
}

export default Orders;

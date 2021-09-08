import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { SellerNavbar } from '../../components';
import { getSales } from '../../services/api';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'seller_orders';

function Orders() {
  const [sales, setSales] = useState([]);
  const user = JSON.parse(localStorage.user);
  const socket = io.connect('http://localhost:3001');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSales();
      setSales(data.filter(({ sellerId }) => sellerId === user.id));
    };
    fetchData();
  }, []);

  socket.on('status', ({ id, status }) => {
    setSales(sales.map((sale) => (sale.id === +id ? { ...sale, status } : sale)));
  });

  return (
    <section>
      <SellerNavbar />
      <h1>PEDIDOS</h1>
      { sales.map((
        { id, totalPrice, saleDate, status, deliveryAddress, deliveryNumber },
      ) => (
        <Link key={ id } to={ `/seller/orders/${id}` }>
          <p data-testid={ `${route}__element-order-id-${id}` }>
            { `Pedido ${id}` }
          </p>
          <p data-testid={ `${route}__element-delivery-status-${id}` }>
            { status }
          </p>
          <p data-testid={ `${route}__element-order-date-${id}` }>
            { formatDate(saleDate) }
          </p>
          <p data-testid={ `${route}__element-card-price-${id}` }>
            { formatPrice(totalPrice) }
          </p>
          <p data-testid={ `${route}__element-card-address-${id}` }>
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>
        </Link>
      )) }
    </section>
  );
}

export default Orders;

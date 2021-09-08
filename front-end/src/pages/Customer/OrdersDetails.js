import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Navbar, CustomerOrderDetailsTable } from '../../components';
import { getSaleById, getUserById, updateSale } from '../../services/api';
import { createButton } from '../../utils/creators';
import { deliveryCheck } from '../../data/ButtonOptions';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'customer_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  const [order, setOrder] = useState({ products: [] });
  const [sellerName, setSellerName] = useState([]);
  const { id } = useParams();
  const socket = io.connect('http://localhost:3001');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSaleById(id);
      const { name } = await getUserById(data.sellerId);
      setOrder(data);
      setSellerName(name);
    };
    fetchData();
  }, [id]);

  socket.on('status', ({ status }) => setOrder({ ...order, status }));

  const onClick = async (status) => {
    await updateSale(id, { status });
    socket.emit('status', { id, status });
    setOrder({ ...order, status });
  };

  return (
    <section>
      <Navbar />
      <p data-testid={ `${route}__${label}-order-id` }>{ order.id }</p>
      <p data-testid={ `${route}__${label}-seller-name` }>{ sellerName }</p>
      <p data-testid={ `${route}__${label}-order-date` }>
        { formatDate(order.saleDate) }
      </p>
      <p data-testid={ `${route}__${label}-delivery-status` }>{ order.status }</p>
      { createButton({
        ...deliveryCheck,
        onClick: () => onClick('Entregue'),
        route,
        disabled: order.status !== 'Em Trânsito',
      }) }
      <CustomerOrderDetailsTable products={ order.products } />
      <p data-testid={ `${route}__element-order-total-price` }>
        { formatPrice(order.totalPrice) }
      </p>
    </section>
  );
}

export default OrdersDetails;

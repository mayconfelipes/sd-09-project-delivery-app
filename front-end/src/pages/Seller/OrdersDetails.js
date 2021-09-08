import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { createButton } from '../../utils/creators';
import { getSaleById, updateSale } from '../../services/api';
import { SellerNavbar, SellerOrderDetailsTable } from '../../components';
import { dispatchCheck, preparingCheck } from '../../data/ButtonOptions';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'seller_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  const [sale, setSale] = useState({ products: [] });
  const { id } = useParams();
  const socket = io.connect('http://localhost:3001');
  // const saleStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSaleById(id);
      setSale(data);
    };
    fetchData();
  }, [id]);

  socket.on('status', ({ status }) => setSale({ ...sale, status }));

  const onClick = async (status) => {
    await updateSale(id, { status });
    socket.emit('status', { id, status });
    setSale({ ...sale, status });
  };

  return (
    <section>
      <SellerNavbar />
      <p data-testid={ `${route}__${label}-order-id-${sale.id}` }>{ sale.id }</p>
      <p data-testid={ `${route}__${label}-order-date` }>
        { formatDate(sale.saleDate) }
      </p>
      <p data-testid={ `${route}__${label}-delivery-status` }>{ sale.status }</p>
      { createButton({
        ...preparingCheck,
        onClick: () => onClick('Preparando'),
        route,
        disabled: sale.status !== 'Pendente',
      }) }
      { createButton({
        ...dispatchCheck,
        onClick: () => onClick('Em Trânsito'),
        route,
        disabled: sale.status !== 'Preparando',
      }) }
      <SellerOrderDetailsTable products={ sale.products } />
      <p data-testid={ `${route}__element-order-total-price` }>
        { formatPrice(sale.totalPrice) }
      </p>
    </section>
  );
}

export default OrdersDetails;

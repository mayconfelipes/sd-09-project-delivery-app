import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { createButton } from '../../utils/creators';
import { getSaleByid } from '../../services/api';
import Navbar from '../../components/Seller/Navbar';
import { dispatchCheck, preparingCheck } from '../../data/ButtonOptions';
import OrderDetailsTable from '../../components/Seller/OrderDetailsTable';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'seller_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  const { apiResponse } = useContext(LoginContext);
  const [sale, setSale] = useState({ products: [] });
  const { id } = useParams();
  // const saleStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSaleByid(id);
      setSale(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar name={ apiResponse.name } />
      <section>
        <p data-testid={ `${route}__${label}-order-id-${sale.id}` }>
          { `Pedido ${sale.id}` }
        </p>
        <p data-testid={ `${route}__${label}-order-date` }>
          { formatDate(sale.saleDate) }
        </p>
        <p data-testid={ `${route}__${label}-delivery-status` }>
          { sale.status }
        </p>
        { createButton({
          ...preparingCheck,
          onclick: () => setSale({ ...sale, status: 'Preparando' }),
          route,
          disabled: sale.status !== 'Pendente',
        }) }
        { createButton({
          ...dispatchCheck,
          onclick: () => setSale({ ...sale, status: 'Em Trânsito' }),
          route,
          disabled: sale.status !== 'Preparando',
        }) }
        <OrderDetailsTable products={ sale.products } />
        <p data-testid={ `${route}__element-order-total-price` }>
          { formatPrice(sale.totalPrice) }
        </p>
      </section>
    </>
  );
}

export default OrdersDetails;

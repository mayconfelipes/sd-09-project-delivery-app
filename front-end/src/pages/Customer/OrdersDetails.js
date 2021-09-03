import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleByid, getUserByid } from '../../services/api';
import OrderDetailsTable from '../../components/Customer/OrderDetailsTable';
import { createButton } from '../../utils/creators';
import { deliveryCheck } from '../../data/ButtonOptions';
import { formatPrice, formatDate } from '../../utils/format';

const route = 'customer_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  const [order, setOrder] = useState({ products: [] });
  const [sellerName, setSellerName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSaleByid(id);
      const { name } = await getUserByid(data.sellerId);
      setOrder(data);
      setSellerName(name);
    };
    fetchData();
  }, [id]);

  return (
    <>
      { console.log(order) }
      <p data-testid={ `${route}__${label}-order-id` }>{ order.id }</p>
      <p data-testid={ `${route}__${label}-seller-name` }>{ sellerName }</p>
      <p data-testid={ `${route}__${label}-order-date` }>
        { formatDate(order.saleDate) }
      </p>
      <p data-testid={ `${route}__${label}-delivery-status` }>{ order.status }</p>
      { createButton({
        ...deliveryCheck,
        onclick: () => setOrder({ ...order, status: 'Entregue' }),
        route,
        disabled: order.status !== 'Em Trânsito',
      }) }
      <OrderDetailsTable products={ order.products } />
      <p data-testid={ `${route}__element-order-total-price` }>
        { formatPrice(order.totalPrice) }
      </p>
    </>
  );
}

export default OrdersDetails;

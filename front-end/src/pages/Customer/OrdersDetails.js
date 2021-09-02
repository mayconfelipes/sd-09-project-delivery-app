import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getSaleByid, getUserByid } from '../../services/api';
import OrderDetailsTable from '../../components/Customer/OrderDetailsTable';
import { createButton } from '../../utils/creators';
import { deliveryCheck } from '../../data/ButtonOptions';

const route = 'customer_order_details';
const label = 'element-order-details-label';

function OrdersDetails() {
  const [order, setOrder] = useState({ products: [] });
  const [sellerName, setSellerName] = useState([]);
  // const user = JSON.parse(localStorage.user);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSaleByid(id);
      // console.log(data);
      const { name } = await getUserByid(data.sellerId);
      setOrder(data);
      setSellerName(name);
    };
    fetchData();
  }, []);

  console.log(sellerName);

  return (
    <section>
      { console.log(order) }
      <p data-testid={ `${route}__${label}-order-id` }>{ order.id }</p>
      <p data-testid={ `${route}__${label}-seller-name` }>{ sellerName }</p>
      <p data-testid={ `${route}__${label}-order-date` }>
        { moment(order.saleDate).format('DD/MM/yyyy') }
      </p>
      <p data-testid={ `${route}__${label}-delivery-status` }>{ order.status }</p>
      <OrderDetailsTable products={ order.products } />
      { createButton({
        ...deliveryCheck,
        onclick: () => setOrder({ ...order, status: 'Entregue' }),
        route,
        disabled: order.status !== 'Em Trânsito',
      }) }
      <p data-testid={ `${route}__element-order-total-price` }>{ order.totalPrice }</p>
    </section>
  );
}

export default OrdersDetails;

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import io from '../../socket';
import './CardOrderList.css';

// 48: 'seller_orders__element-order-id-',
// 49: 'seller_orders__element-delivery-status-',
// 50: 'seller_orders__element-order-date-',
// 51: 'seller_orders__element-card-price-',
// 52: 'seller_orders__element-card-address-',

const CardOrderList = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState(order.status);

  useEffect(() => {
    io.on('updateStatus', ({ status, id }) => {
      if (id === order.id) setOrderStatus(status);
    });
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Link to={ `/seller/orders/${order.id}` }>
      <div className="card-order">
        <p data-testid={ `seller_orders__element-order-id-${order.id}` }>
          Pedido &nbsp;
          { order.id }
        </p>
        <div>
          <section>
            <p
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              className="status-container"
            >
              { orderStatus }
            </p>
            <p
              data-testid={
                `seller_orders__element-order-date-${order.id}`
              }
            >
              { moment(order.sale_date).format('L')}
            </p>
            <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
              { order.totalPrice }
            </p>
          </section>
          <section className="card-order-address">
            <span
              data-testid={
                `seller_orders__element-card-address-${order.id}`
              }
            >
              { order.deliveryAddress }
            </span>
            <span>,&nbsp; </span>
            <span
              data-testid={
                `seller_orders__element-card-address-${order.id}`
              }
            >
              { order.deliveryNumber }
            </span>
          </section>
        </div>
      </div>
    </Link>
  );
};

CardOrderList.propTypes = {
  order: shape().isRequired,
};

export default CardOrderList;

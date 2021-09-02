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

const CardOrderListCustomer = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState(order.status);

  useEffect(() => {
    io.on('updateStatus', ({ status, id }) => {
      if (id === order.id) setOrderStatus(status);
    });
  });

  const renderDateAndPrice = () => (
    <div className="render-date-price">
      <p
        data-testid={
          `customer_orders__element-order-date-${order.id}`
        }
      >
        { moment(order.sale_date).format('L')}
      </p>
      <p data-testid={ `customer_orders__element-card-price-${order.id}` }>
        { `R$ ${order.totalPrice}` }
      </p>
    </div>
  );

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Link to={ `/customer/orders/${order.id}` }>
      <div className="card-order">
        <p
          data-testid={ `customer_orders__element-order-id-${order.id}` }
          className="number-order"
        >
          Pedido
          <br />
          { order.id }
        </p>
        <div className="card-order-info">
          <section>
            <div
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              className={ `status-container ${orderStatus}` }
            >
              { orderStatus.toUpperCase() }
            </div>
            { renderDateAndPrice() }
          </section>
        </div>
      </div>
    </Link>
  );
};

CardOrderListCustomer.propTypes = {
  order: shape().isRequired,
};

export default CardOrderListCustomer;

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../styles/ordersTag.css';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  return (
    <Link to={ `/customer/orders/${id}` } className="order-card">
      <div className="order-card-id">
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
      </div>
      <p
        className="order-card-status"
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        className="order-card-date"
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        className="order-card-price"
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        { `R$ ${totalPrice.replace('.', ',')}` }
      </p>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice, deliveryAddress, deliveryNumber } = order;
  return (
    <Link to={ `/seller/orders/${id}` } className="seller-order-card">
      <div className="seller-order-card-id">
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</p>
      </div>
      <p
        className="seller-order-card-status"
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        className="seller-order-card-date"
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        { moment(saleDate).format('DD/MM/YYYY') }
      </p>
      <p
        className="seller-order-card-price"
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        { `R$ ${totalPrice.replace('.', ',')}` }
      </p>
      <p
        className="seller-order-card-address"
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        { `${deliveryAddress}, ${deliveryNumber}` }
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
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;

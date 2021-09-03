import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ordersTag.css';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  console.log(order);
  return (
    <tr className="order-card">
      <Link to={ `/customer/orders/${id}` }>
        <td
          data-testid={ `customer_orders__element-order-id-${id}` }
          className="order-card-id"
        >
          { id }
        </td>
        <td
          data-testid={ `customer_orders__element-order-date-${id}` }
          className="order-card-data"
        >
          { saleDate }
        </td>
        <td
          data-testid={ `customer_orders__element-delivery-status-${id}` }
          className="order-card-status"
        >
          { status }
        </td>
        <td
          className="order-card-total"
        >
          { `R$${totalPrice.replace('.', ',')}` }
        </td>
      </Link>
    </tr>
  );
}

// OrderCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   saleDate: PropTypes.string.isRequired,
//   totalPrice: PropTypes.number.isRequired,
//   status: PropTypes.string.isRequired,
// };
OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderCard;

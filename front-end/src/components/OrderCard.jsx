import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  const { id, saleDate, status, totalPrice } = order;
  console.log(order);
  return (
    <div>
      <ul>
        <li className="order-card-id">{ `Número do pedido: ${id}` }</li>
        <li className="order-card-saledate">{ `Data da compra: ${saleDate}` }</li>
        <li className="order-card-status">{ `Status: ${status}` }</li>
        <li className="order-card-totalprice">{ `Valor: ${totalPrice}` }</li>
      </ul>
    </div>
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

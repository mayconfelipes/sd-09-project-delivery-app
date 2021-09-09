import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataTestIds from '../utils/dataTestIds';
import transformDate from '../utils/transformDate';
import transformOrderNumber from '../utils/transformOrderNumber';

function OrderCard({ sale }) {
  const {
    role,
    id,
    totalPrice: price,
    deliveryAddress: adress,
    deliveryNumber: addressNumber,
    saleDate: date,
    status,
  } = sale;

  const getColorStatus = () => {
    if (status === 'Pendente') {
      return 'bg-yellow';
    }

    if (status === 'Preparando') {
      return 'bg-green-ligth';
    }

    if (status === 'Entregue') {
      return 'bg-green';
    }
  };

  const statusDiv = (userRole) => (
    <div className={ `pedido-data-value-status ${getColorStatus()}` }>
      <p
        data-testid={
          userRole === 'seller'
            ? `${dataTestIds[49]}${id}`
            : `${dataTestIds[34]}${id}`
        }
      >
        { status }
      </p>
    </div>
  );

  const addressDiv = () => (
    <div>
      <p data-testid={ `${dataTestIds[52]}${id}` }>
        { `${adress}, ${addressNumber}` }
      </p>
    </div>
  );

  return (
    <Link to={ `/${role}/orders/${id}` } className="content-card-pedido-item">
      <div>
        <div className="pedido-item-data">
          <div className="pedido-item-data-num">
            <p
              data-testid={
                role === 'seller'
                  ? `${dataTestIds[48]}${id}`
                  : `${dataTestIds[33]}${id}`
              }
            >
              { `Pedido: ${transformOrderNumber(id)}` }
            </p>
          </div>
          { statusDiv(role) }
          <div className="pedido-item-data-value">
            <p
              data-testid={
                role === 'seller'
                  ? `${dataTestIds[50]}${id}`
                  : `${dataTestIds[35]}${id}`
              }
              className="pedido-data-value-item"
            >
              { transformDate(date) }
            </p>
            <p
              data-testid={
                role === 'seller'
                  ? `${dataTestIds[51]}${id}`
                  : `${dataTestIds[36]}${id}`
              }
              className="pedido-data-value-item"
            >
              { price.replace('.', ',') }
            </p>
          </div>
        </div>
        { role === 'seller' && addressDiv() }
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    role: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;

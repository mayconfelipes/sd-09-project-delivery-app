import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataTestIds from '../utils/dataTestIds';

function OrderCard({
  role,
  id,
  total_price: price,
  delivery_address: adress,
  delivery_number: addressNumber,
  sale_date: date,
  status,
}) {
  const statusDiv = (userRole) => (
    <div>
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
    <Link to={ `/${role}/orders/${id}` }>
      <div>
        <div>
          <div>
            <p
              data-testid={
                userRole === 'seller'
                  ? `${dataTestIds[33]}${id}`
                  : `${dataTestIds[48]}${id}`
              }
            >
              { `Pedido: ${id}` }
            </p>
          </div>
          { statusDiv(role) }
          <div>
            <p
              data-testid={
                userRole === 'seller'
                  ? `${dataTestIds[50]}${id}`
                  : `${dataTestIds[35]}${id}`
              }
            >
              { date }
            </p>
            <p
              data-testid={ userRole === 'seller' && `${dataTestIds[51]}${id}` }
            >
              { price }
            </p>
          </div>
        </div>
        { role === 'seller' && addressDiv() }
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  role: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  total_price: PropTypes.number.isRequired,
  delivery_address: PropTypes.string.isRequired,
  delivery_number: PropTypes.number.isRequired,
  sale_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderCard;

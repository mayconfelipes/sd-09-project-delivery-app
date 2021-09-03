import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { string, number, shape } from 'prop-types';

function SalesCard({ sale, role }) {
  const {
    deliveryNumber,
    deliveryAddress,
    status,
    saleDate,
    id,
    totalPrice,
    index,
  } = sale;

  const maxLenghPad = 4;

  return (
    <div>
      <li
        key={ index }
        className="main--sales"
      >
        <h4
          data-testid={ `${role}_orders__element-order-id-${id}` }
        >
          Pedido
          { id.toString().padStart(maxLenghPad, '0') }
        </h4>
        <Link
          to={ `/${role}/orders/${id}` }
          data-testid={ `${role}_orders__element-order-id-${id}` }
        >
          <h4
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
          >
            { status }
          </h4>
        </Link>
        <h4
          data-testid={ `${role}_orders__element-order-date-${id}` }
        >
          { format(new Date(saleDate), 'dd/MM/yyyy') }
        </h4>
        <h4
          data-testid={ `${role}_orders__element-card-address-${id}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}`}
        </h4>
        <h4
          data-testid={ `${role}_orders__element-card-price-${id}` }
        >
          { totalPrice.replace(/\./ig, ',') }
        </h4>
      </li>
    </div>
  );
}

SalesCard.propTypes = {
  sale: shape({
    deliveryNumber: number.isRequired,
    status: string.isRequired,
    saleDate: string.isRequired,
    id: number.isRequired,
    index: number.isRequired,
  }).isRequired,
  role: string.isRequired,
};

export default SalesCard;

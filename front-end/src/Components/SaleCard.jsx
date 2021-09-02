import React from 'react';
import PropTypes from 'prop-types';

function SaleCard({
  saleId,
  status,
  saleDate,
  totalPrice,
}) {
  return (
    <>
      <p data-testid={ `customer_orders__element-order-id-${saleId}` }>
        Pedido&nbsp;
        <span>{ saleId }</span>
      </p>
      <p data-testid={ `customer_orders__element-delivery-status-${saleId}` }>
        { status }
      </p>
      <p data-testid={ `customer_orders__element-order-date-${saleId}` }>
        { saleDate }
      </p>
      <p>
        R$
        { totalPrice }
      </p>
    </>
  );
}

SaleCard.propTypes = {
  saleId: PropTypes.number,
  deliveryNumber: PropTypes.string,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.number,
  key: PropTypes.number,
}.isRequired;

export default SaleCard;

import React from 'react';
import PropTypes from 'prop-types';

function SaleCard({
  saleId,
  status,
  saleDate,
  totalPrice,
}) {
  const statusClasses = (sts) => {
    if (sts === 'Pendente') return 'pending';
    if (sts === 'Preparando') return 'preparing';
    if (sts === 'Entregue') return 'done';
  };

  return (
    <>
      <div className="order-card-left">
        <div>
          <p data-testid={ `customer_orders__element-order-id-${saleId}` }>
            Pedido&nbsp;
          </p>
          <p>{ saleId }</p>
        </div>
      </div>

      <div className="order-card-right">
        <div className={ `order-card-left-half ${statusClasses(status)}` }>
          <p data-testid={ `customer_orders__element-delivery-status-${saleId}` }>
            { status }
          </p>
        </div>
        <div className="order-card-right-half">
          <div className="order-half-content">
            <p data-testid={ `customer_orders__element-order-date-${saleId}` }>
              { saleDate }
            </p>
          </div>
          <div className="order-half-content">
            <p>
              R$
              { totalPrice }
            </p>
          </div>
        </div>
      </div>
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

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

  const renderTotalPrice = (price) => (
    <p>
      R$
      <span
        data-testid={ `customer_orders__element-card-price-${saleId}` }
      >
        { price.replace('.', ',') }
      </span>
    </p>
  );

  return (
    <>
      <div className="order-card-left">
        <div>
          <p>
            Pedido&nbsp;
          </p>
          <p data-testid={ `customer_orders__element-order-id-${saleId}` }>
            { saleId }
          </p>
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
            { renderTotalPrice(totalPrice) }
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

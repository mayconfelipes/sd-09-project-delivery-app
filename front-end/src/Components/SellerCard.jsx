import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SaleCard({
  saleId,
  status,
  saleDate,
  totalPrice,
}) {
  const sliceDate = 10;
  const statusClasses = (sts) => {
    if (sts === 'Pendente') return 'pending';
    if (sts === 'Preparando') return 'preparing';
    if (sts === 'Entregue') return 'done';
  };

  return (
    <Link to={ `/seller/orders/${saleId}` }>
      <div className="order-card-left">
        <div>
          <p data-testid={ `seller_orders__element-order-id-${saleId}` }>
            Pedido&nbsp;
          </p>
          <p>{ saleId }</p>
        </div>
      </div>

      <div className="order-card-right">
        <div className={ `order-card-left-half ${statusClasses(status)}` }>
          <p data-testid={ `seller_orders__element-delivery-status-${saleId}` }>
            { status }
          </p>
        </div>
        <div className="order-card-right-half">
          <div className="order-half-content">
            <p data-testid={ `seller_orders__element-order-date-${saleId}` }>
              { saleDate
                .slice(0, sliceDate)
                .replaceAll('-', '')
                .replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1') }
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
    </Link>
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

import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = (props) => {
  const {
    id,
    status,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
  } = props;

  return (
    <div>
      <span data-testid={ `seller_orders__element-order-id-${id}` }>
        { `Pedido 000${id}` }
      </span>
      <div>
        <a href={ `/seller/orders/${id}` }>
          <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
            { status }
          </span>
          <p data-testid={ `seller_orders__element-order-date-${id}` }>
            { saleDate }
          </p>
          <p data-testid={ `seller_orders__element-card-price-${id}` }>
            { totalPrice }
          </p>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            { `${deliveryAddress}, ${deliveryNumber}` }
          </p>
        </a>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default OrderCard;

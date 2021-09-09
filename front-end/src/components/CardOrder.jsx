import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardOrder({ venda, role }) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = venda;
  const formatedDate = new Date(saleDate).toLocaleDateString('pt-BR');

  return (
    <div className="corpo_card">
      <div className="div_pedido">
        <span>Pedido</span>
        <Link to={ `/customer/orders/${id}` } className="linkid">
          <span
            data-testid={ role === 'customer'
              ? `customer_orders__element-order-id-${id}`
              : `seller_orders__element-order-id-${id}` }
          >
            {id}
          </span>
        </Link>
      </div>

      <button
        className="btn btn-success"
        type="button"
        data-testid={ role === 'customer'
          ? `customer_orders__element-delivery-status-${id}`
          : `seller_orders__element-delivery-status-${id}` }
      >
        { `${status}` }
      </button>

      <div className="data_valor">
        <span
          data-testid={ role === 'customer'
            ? `customer_orders__element-order-date-${id}`
            : `seller_orders__element-order-date-${id}` }
        >
          {formatedDate}
        </span>
        <span
          data-testid={ role === 'customer'
            ? `customer_orders__element-card-price-${id}`
            : `seller_orders__element-card-price-${id}` }
        >
          {`R$ ${totalPrice.replace('.', ',')}`}
        </span>
        { role === 'customer' ? null
          : (
            <span data-testid={ `seller_orders__element-card-address-${id}` }>
              { `${deliveryAddress}, nº ${deliveryNumber}` }
            </span>
          ) }
      </div>
    </div>
  );
}
CardOrder.propTypes = {
  role: PropTypes.string.isRequired,
  venda: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired };

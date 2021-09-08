import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardOrder({ venda, role }) {
  const { id, status, saleDate, totalPrice } = venda;
  const formatedDate = new Date(saleDate).toLocaleDateString('pt-BR');

  console.log(role);

  return (
    <div className="corpo_card">
      <div className="div_pedido">
        <span>Pedido</span>
        <Link to={ `/customer/orders/${id}` }>
          <span
            data-testid={ `customer_orders__element-order-id-${id}` }
          >
            {id}
          </span>
        </Link>
      </div>

      <button
        type="button"
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { `${status}` }
      </button>

      <div className="data_valor">
        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {formatedDate}
        </span>
        <span
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {`R$ ${totalPrice.replace('.', ',')}`}
        </span>
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
  }).isRequired };

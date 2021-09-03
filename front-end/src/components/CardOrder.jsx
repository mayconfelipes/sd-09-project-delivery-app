import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function CardOrder({ venda }) {
  const history = useHistory();
  const { id, status, saleDate, totalPrice } = venda;
  const formatedDate = new Date(saleDate).toLocaleDateString('pt-BR');

  return (
    <div className="corpo_card">
      <div className="div_pedido">
        <span>Pedido</span>
        <span data-testid={ `customer_orders__element-order-id-${id}` }>{id}</span>
      </div>

      <button
        type="button"
        onClick={ () => history.push(`customer/orders/${id}`) }
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
        <span>{`R$ ${totalPrice}`}</span>
      </div>
    </div>
  );
}
CardOrder.propTypes = {
  venda: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired };

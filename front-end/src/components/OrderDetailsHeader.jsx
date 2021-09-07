import React from 'react';
import PropTypes from 'prop-types';

const dataTestId = require('../utills/dataTestIds');

const OrderDetailsHeader = (props) => {
  const { orderDetails } = props;
  console.log(orderDetails);
  const formatDate = (date) => {
    const split = date.split('T')[0].split('-');
    const formattedDate = `${split[2]}/${split[1]}/${split[0]}`;
    return formattedDate;
  };
  return (
    <div>
      <p>Detalhe do Pedido</p>
      <div>
        <p data-testid={ dataTestId[37] }>
          {orderDetails.id}
        </p>
        <p data-testid={ dataTestId[38] }>
          {`P.Vend: ${orderDetails.sellerName}`}
        </p>
        <p data-testid={ dataTestId[39] }>
          {formatDate(orderDetails.saleDate)}
        </p>
        <p data-testid={ dataTestId[40] }>
          {orderDetails.status}
        </p>
        <button
          type="button"
          data-testid={ dataTestId[47] }
          disabled
        >
          Marcar como entregue
        </button>
      </div>
    </div>
  );
};

OrderDetailsHeader.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  sellerName: PropTypes.number,
}.isRequired;

export default OrderDetailsHeader;

import React from 'react';
import PropTypes from 'prop-types';

const OrderHeader = ({ id }) => (
  <h1>{`Detalhe do pedido Nº${id}`}</h1>
);

OrderHeader.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OrderHeader;

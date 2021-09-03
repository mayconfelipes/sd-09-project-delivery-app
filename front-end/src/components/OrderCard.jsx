import React from 'react';
import PropTypes from 'prop-types';

const OrderCard = (props) => {
  const { orderInfo } = props;
  return (
    <div>
      <p>{orderInfo}</p>
      <p>status do pedido</p>
      <p>data do pedido</p>
      <p>Preço</p>
    </div>
  );
};

OrderCard.propTypes = {
  ordersInfo: PropTypes.objectOf,
}.isRequired;

export default OrderCard;

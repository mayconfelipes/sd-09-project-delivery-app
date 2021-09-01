import React from 'react';
import StatusOrder from '../statusOrder/index';

const CardOrder = (order) => {
  const { numberOrder, status, date, totalValue, address } = order;

  return (
    <div>
      <span>Pedido</span>
      <span>{numberOrder}</span>

      <div><h3>{StatusOrder(status)}</h3></div>

      <p><strong>{date}</strong></p>
      <p><strong>{totalValue}</strong></p>

      { address
      && <span>{address}</span>}
    </div>
  );
};

export default CardOrder;

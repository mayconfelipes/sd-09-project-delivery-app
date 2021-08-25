import React, { useState } from 'react';

const CardOrder = (numberOrder, status, date, totalValue, address) => {
  return (
    <div>
      <span>Pedido</span>
      <span>{numberOrder}</span>

      {/* criar card status e importar */}
      <div><h3>{status}</h3></div>

      <p><strong>{date}</strong></p>
      <p><strong>{totalValue}</strong></p>

      { address && 
        <span>{address}</span>
      }
    </div>
  );
};

export default CardOrder;
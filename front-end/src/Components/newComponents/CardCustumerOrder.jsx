// import PropTypes from 'prop-types';
import React from 'react';

// import React, { useState, useEffect } from 'react';
// import { useCart } from '../../contexts/CartContext';

// function CardCustumerOrder({ product }) {
function CardCustumerOrder(selectOrder) {
  const { selectOrder: userOrder } = selectOrder;
  const { id, status, saleDate, totalPrice } = userOrder;
  console.log(id);
  console.log(status);
  console.log(saleDate);
  console.log(totalPrice);

  function ajustData(data) {
    console.log(data);
    const limit = 2;
    let newData = data.split('T', limit);
    newData = newData[0].split('-', limit + 1);
    return newData.reverse().join('/');
  }

  return (
    <div>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        Pedido
        { id }
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        { ajustData(saleDate) }
      </div>
      <div>
        { totalPrice }
      </div>
    </div>
  );
}

// ProductCard.propTypes = {
//   name: PropTypes.string,
// }.isRequired;

export default CardCustumerOrder;

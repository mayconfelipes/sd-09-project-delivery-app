import React from 'react';
import { Link } from 'react-router-dom';

function CardCustumerOrder(selectOrder) {
  const { selectOrder: userOrder } = selectOrder;
  const { id, status, saleDate, totalPrice } = userOrder;

  function ajustData(data) {
    const limit = 2;
    let newData = data.split('T', limit);
    newData = newData[0].split('-', limit + 1);
    return newData.reverse().join('/');
  }

  function ajustPrice(price) {
    const newPrice = price.replace('.', ',');
    return newPrice;
  }

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        Pedido
        <span data-testid={ `customer_orders__element-order-id-${id}` }>
          { id }
        </span>
      </div>
      <div>
        <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { status }
        </span>
      </div>
      <div>
        <span data-testid={ `customer_orders__element-order-date-${id}` }>
          { ajustData(saleDate) }
        </span>
      </div>
      <div>
        <span data-testid={ `customer_orders__element-card-price-${id}` }>
          { ajustPrice(totalPrice) }
        </span>
      </div>
    </Link>
  );
}

export default CardCustumerOrder;

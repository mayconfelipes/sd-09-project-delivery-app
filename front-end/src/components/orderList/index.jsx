import React, { useContext } from 'react';
import Context from '../../context';

const OrderList = () => {
  const { allSales } = useContext(Context);
  return (
    <div>
      {
        allSales.map(({
          id, status, sale_date: saleDate, total_price: totalPrice,
          delivery_address: deliveryAddress, delivery_number: deliveryNumber,
        }) => (
          <div key={ id }>
            <p
              data-testid={ `seller_orders__element-order-id-${id}` }
            >
              {`Pedido ${id}`}
            </p>
            <p
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              {status}
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {saleDate}
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {totalPrice}
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              {`${deliveryAddress} ${deliveryNumber}`}
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default OrderList;

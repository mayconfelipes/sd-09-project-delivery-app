import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import Context from '../../context';
import * as S from './styled';

const OrderList = () => {
  const { allSales } = useContext(Context);
  const [details, setDetails] = useState({ redirect: false, orderId: 0 });
  const { redirect, orderId } = details;

  const redirectTo = (id) => {
    setDetails({
      redirect: true,
      orderId: id,
    });
  };

  return (
    <S.SalesList>
      {
        redirect && <Redirect to={ `/seller/orders/${orderId}` } />
      }
      {
        allSales.map(({
          id, status, sale_date: saleDate, total_price: totalPrice,
          delivery_address: deliveryAddress, delivery_number: deliveryNumber,
        }) => (
          <S.SaleCard
            key={ id }
            name={ id }
            onClick={ () => redirectTo(id) }
          >
            <p
              name={ id }
              value={ id }
              data-testid={ `seller_orders__element-order-id-${id}` }
            >
              {`Pedido ${id}`}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={ `seller_orders__element-delivery-status-${id}` }
            >
              {status}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {saleDate}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              {totalPrice}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={ `seller_orders__element-card-address-${id}` }
            >
              {`${deliveryAddress} ${deliveryNumber}`}
            </p>
          </S.SaleCard>
        ))
      }
    </S.SalesList>
  );
};

export default OrderList;

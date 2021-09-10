import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import formatDate from '../../services/formatDate';
import formatPrice from '../../services/formatPrice';
import Context from '../../context';
import * as S from './styled';

const OrderList = () => {
  const { allSales } = useContext(Context);
  const [details, setDetails] = useState({ redirect: false, orderId: 0 });
  const { redirect, orderId } = details;
  const [changeDataTestId, setChangeDataTestId] = useState(true);

  const redirectTo = (id) => {
    setDetails({
      redirect: true,
      orderId: id,
    });
  };

  useEffect(() => {
    const pathName = window.location.pathname;
    console.log(pathName);
    if (pathName === '/customer/orders') setChangeDataTestId(false);
  }, []);

  const returnP = (id, deliveryAddress, deliveryNumber) => (
    <p
      name={ id }
      value={ id }
      data-testid={ `seller_orders__element-card-address-${id}` }
    >
      {`${deliveryAddress} ${deliveryNumber}`}
    </p>
  );
  console.log(changeDataTestId);
  return (
    <S.SalesList>
      {
        redirect
          && <Redirect
            to={ `/${changeDataTestId ? 'seller' : 'customer'}/orders/${orderId}` }
          />
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
              data-testid={
                `${changeDataTestId
                  ? 'seller' : 'customer'}_orders__element-order-id-${id}`
              }
            >
              {`Pedido ${id}`}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={
                `${changeDataTestId
                  ? 'seller' : 'customer'}_orders__element-delivery-status-${id}`
              }
            >
              {status}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={
                `${changeDataTestId
                  ? 'seller' : 'customer'}_orders__element-order-date-${id}`
              }
            >
              {/* {new Date()} */}
              {formatDate(saleDate.split('T')[0])}
            </p>
            <p
              name={ id }
              value={ id }
              data-testid={
                `${changeDataTestId
                  ? 'seller' : 'customer'}_orders__element-card-price-${id}`
              }
            >
              {formatPrice(Number(totalPrice))}
            </p>
            {changeDataTestId
              ? returnP(id, deliveryAddress, deliveryNumber)
              : ''}
          </S.SaleCard>
        ))
      }
    </S.SalesList>
  );
};

export default OrderList;

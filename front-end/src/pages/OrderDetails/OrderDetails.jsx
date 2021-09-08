
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import DetailsItem from '../../components/DetailsItem';
import OrderDetailsHeader from '../../components/OrderDetailsHeader';
import connectBack from '../../utills/axiosConfig';
import TotalButton from './totalButton';

// const dataTestId = require('../../utills/dataTestIds');

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState();
  const getOrder = useCallback(() => {
    connectBack.get(`/customer/orders/${id}`)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }, [id]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  const brazilianPrice = (value) => {
    const minN = 3;
    if (typeof value === 'number') value = value.toFixed(2);
    const newPrice = value.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };
  return (
    <div>
      <NavBar />
      <div>
        {orderDetails
          ? <OrderDetailsHeader orderDetails={ orderDetails } /> : <p>carregando</p>}
        <div>
          {
            orderDetails
              ? orderDetails.products.map((item, index) => (
                <DetailsItem
                  cartItem={ item }
                  order={ index }
                  key={ index + item.productName }
                />))
              : <p>carregando</p>
          }
        </div>
        {/* {orderDetails
          ?<button type="button" data-testid={ dataTestId[46] }>
            {brazilianPrice(orderDetails.totalPrice)}
          </button>
          : <p>carregando</p>} */}
        {/* <button type="button" data-testid={ dataTestId[46] }>
          {orderDetails ? brazilianPrice(orderDetails.totalPrice) : carregando}
        </button> */}
        {orderDetails
          ? <TotalButton totalPrice={ brazilianPrice(orderDetails.totalPrice) } />
          : <p>carregando</p>}
      </div>
    </div>
  );
};

export default OrderDetails;

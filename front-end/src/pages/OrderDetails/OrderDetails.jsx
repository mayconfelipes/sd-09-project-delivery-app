import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import NavBar from '../../components/NavBar';
import DetailsItem from '../../components/DetailsItem';
import OrderDetailsHeader from '../../components/OrderDetailsHeader';
import connectBack from '../../utills/axiosConfig';

// const dataTestId = require('../../utills/dataTestIds');

const OrderDetails = () => {
  const [cartItens, setCartItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
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
    const getItens = JSON.parse(localStorage.getItem('products'));
    const itensArray = Object.keys(getItens).map((key) => ({
      item: {
        ...getItens[key],
        name: key,
      },
    }));
    setCartItens(itensArray);
    const currPrice = Object.entries(getItens)
      .reduce((acc, curr) => acc + curr[1].totalProduct, 0).toFixed(2);
    setTotalPrice(currPrice);
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
          {cartItens.map((item, index) => (
            <DetailsItem
              cartItem={ item.item }
              order={ index }
              key={ index + item.item.name }
            />
          ))}
        </div>
        <button
          type="button"
        >
          {`Total $:${brazilianPrice(totalPrice)}`}
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;

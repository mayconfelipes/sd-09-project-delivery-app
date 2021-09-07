import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import NavBar from '../../components/NavBar';
import DetailsItem from '../../components/DetailsItem';
import connectBack from '../../utills/axiosConfig';

const OrderDetails = () => {
  const id40 = 'customer_order_details__element-order-details-label-delivery-status';
  const [cartItens, setCartItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(
    { id: '', sellerId: '', saleDate: '', status: '' },
  );
  console.log(orderDetails);
  const getOrder = useCallback(() => {
    connectBack.get(`/customer/orders/${id}`)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
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

  const formatDate = (date) => {
    const split = date.split('T')[0].split('-');
    const formattedDate = `${split[2]}/${split[1]}/${split[0]}`;
    return formattedDate;
  };
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
        <p>Detalhe do Pedido</p>
        <div>
          <p data-testid="customer_order_details__element-order-details-label-order-id">
            {orderDetails.id}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P.Vend: ${orderDetails.sellerId}`}
          </p>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {formatDate(orderDetails.saleDate)}
          </p>
          <p data-testid={ id40 }>
            {orderDetails.status}
          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            Marcar como entregue
          </button>
        </div>
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

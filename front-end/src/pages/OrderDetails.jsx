import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
import OrderDetailsTable from '../components/OrderDetailsTable';
import NavBarCustomer from '../components/navBarCustomer';
import '../styles/OrderDetails.css';
import * as api from '../services/api';

const socket = io('http://localhost:3001');

function OrderDetails() {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState();
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    async function getOrder() {
      const user = JSON.parse(localStorage.getItem('user'));
      const orderById = await api.getOrderById(orderId, user.token);
      setOrderStatus(orderById.status);
      setOrder(orderById);
    }
    getOrder();
  }, []);

  socket.on('updateOrderStatus', (orderEvent) => {
    setOrderStatus(orderEvent.status);
  });

  const dataTestIds = {
    orderId: 'customer_order_details__element-order-details-label-order-id',
    sellerName: 'customer_order_details__element-order-details-label-seller-name',
    orderDate: 'customer_order_details__element-order-details-label-order-date',
    deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
    buttonDelivery: 'customer_order_details__button-delivery-check',
    orderTotalPrice: 'customer_order_details__element-order-total-price',
  };

  const deliveryBtn = async () => {
    const status = 'Entregue';
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedOrder = await api.updateOrder(orderId, status, user.token);
    setOrderStatus(updatedOrder.status);
    setOrder(updatedOrder);
    socket.emit('updateOrderStatus', updatedOrder);
  };

  return (
    order
      ? (
        <div className="order-details-page">
          <NavBarCustomer textProp="detalhes" />
          <div className="order-details">
            <div className="order-details-header">
              <span
                data-testid={ dataTestIds.orderId }
              >
                { `PEDIDO: ${order.id}` }
              </span>
              <span
                data-testid={ dataTestIds.sellerName }
              >
                { `P. Vend: ${order.seller.name}` }
              </span>
              <span
                data-testid={ dataTestIds.orderDate }
              >
                { moment(order.saleDate).format('DD/MM/YYYY') }
              </span>
              <span
                data-testid={ dataTestIds.deliveryStatus }
              >
                { orderStatus }
              </span>
              <button
                data-testid={ dataTestIds.buttonDelivery }
                disabled={ orderStatus !== 'Em Trânsito' }
                type="button"
                onClick={ deliveryBtn }
              >
                Marcar como entregue
              </button>
            </div>
            <OrderDetailsTable products={ order.products } />
            <h3
              data-testid={ dataTestIds.orderTotalPrice }
              className="order-details-total"
            >
              { `Total: R$ ${order.totalPrice.replace('.', ',')}` }
            </h3>
          </div>
        </div>)
      : <h1>Carregando as informações do pedido...</h1>
  );
}

export default OrderDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
import SellerOrderDetailsTable from '../components/SellerOrderDetailsTable';
import NavBarSeller from '../components/navBarSeller';
import '../styles/SellerOrderDetails.css';
import * as api from '../services/api';

const socket = io('http://localhost:3001');

function SellerOrderDetails() {
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
    orderId: 'seller_order_details__element-order-details-label-order-id',
    orderDate: 'seller_order_details__element-order-details-label-order-date',
    deliveryStatus: 'seller_order_details__element-order-details-label-delivery-status',
    buttonPreparing: 'seller_order_details__button-preparing-check',
    buttonDispatch: 'seller_order_details__button-dispatch-check',
    orderTotalPrice: 'seller_order_details__element-order-total-price',
  };

  const PREPARING = 'Preparando';
  const DISPATCH = 'Em Trânsito';

  const updateOrderBtnBtn = async (status) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedOrder = await api.updateSale(orderId, status, user.token);
    setOrderStatus(updatedOrder.status);
    setOrder(updatedOrder);
    socket.emit('updateOrderStatus', updatedOrder);
  };

  return (
    order
      ? (
        <div className="seller-order-details-page">
          <NavBarSeller />
          <div className="seller-order-details">
            <div className="seller-order-details-header">
              <span
                data-testid={ dataTestIds.orderId }
              >
                { `PEDIDO: ${order.id}` }
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
                data-testid={ dataTestIds.buttonPreparing }
                disabled={ orderStatus !== 'Pendente' }
                type="button"
                onClick={ () => updateOrderBtnBtn(PREPARING) }
              >
                Preparar Pedido
              </button>
              <button
                data-testid={ dataTestIds.buttonDispatch }
                disabled={ orderStatus !== 'Preparando' }
                type="button"
                onClick={ () => updateOrderBtnBtn(DISPATCH) }
              >
                Saiu para Entrega
              </button>
            </div>
            <SellerOrderDetailsTable products={ order.products } />
            <h3
              data-testid={ dataTestIds.orderTotalPrice }
              className="seller-order-details-total"
            >
              { `Total: R$ ${order.totalPrice.replace('.', ',')}` }
            </h3>
          </div>
        </div>)
      : <h1>Carregando as informações do pedido...</h1>
  );
}

export default SellerOrderDetails;

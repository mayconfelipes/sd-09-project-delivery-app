import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';
import OrderProducts from '../components/OrderProducts';
import socket from '../utils/socket';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const milisseconds = 400;
    const userLocal = JSON.parse(localStorage.getItem('user'));
    setUser(userLocal);
    const getSale = async () => {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:3001/sales/${id}`);
        setOrder(response.data);
        setStatus(response.data.sale.status);
      }, milisseconds);
    };
    socket.on('newStatus', (newStatus) => setStatus(newStatus));
    getSale();
  }, [id, updated]);

  const handleClick = async (newStatus) => {
    const milisseconds = 1000;
    socket.emit('updateStatus', newStatus);
    await axios.put(`http://localhost:3001/sales/${id}`, { newStatus });
    setUpdated(true);
    setTimeout(() => setUpdated(false), milisseconds);
  };

  const generateDataTestId = (flag) => (
    `${user.role}_order_details__element-order-details-label-${flag}`);

  const generateDataTestIdButtons = (role, flag) => (
    `${role}_order_details__button-${flag}`);

  const renderButtonsSeller = ({ value, testId, disabled, newStatus }) => (
    <button
      type="button"
      data-testid={ generateDataTestIdButtons('seller', testId) }
      disabled={ disabled }
      onClick={ () => handleClick(newStatus) }
    >
      {value}
    </button>
  );

  const maxLengthPad = 4;

  if (!order || !user) return <p>loading...</p>;

  console.log(`Status: ${order.sale.status}`);
  const buttonsSeller = [
    {
      value: 'Preparando o pedido',
      testId: 'preparing-check',
      disabled: order.sale.status === 'Preparando'
      || order.sale.status === 'Em Trânsito'
      || order.sale.status === 'Entregue',
      newStatus: 'Preparando',
    },
    {
      value: 'Saiu para entrega',
      testId: 'dispatch-check',
      disabled: order.sale.status === 'Pendente'
      || order.sale.status !== 'Preparando',
      newStatus: 'Em Trânsito',
    },
  ];

  return (
    <section>
      <Navbar />
      <h1>Detalhes do pedido</h1>
      { updated && <span>Status atualizado :) </span> }
      <header>
        <h1
          data-testid={ generateDataTestId('order-id') }
        >
          { order.sale.id.toString().padStart(maxLengthPad, '0') }
        </h1>
        <p
          data-testid={ generateDataTestId('seller-name') }
        >
          P. Vend:
          { order.seller.name }
        </p>
        <p data-testid={ generateDataTestId('order-date') }>
          { format(new Date(order.sale.saleDate), 'dd/MM/yyyy') }
        </p>
        <p data-testid={ generateDataTestId('delivery-status') }>
          { !status ? order.sale.status : status }
        </p>
        { user.role === 'customer' && (
          <button
            type="button"
            data-testid={ `${user.role}_order_details__button-delivery-check` }
            disabled={ !status
            || status === 'Preparando'
            || status === 'Pendente'
            || status === 'Entregue' }
            onClick={ () => handleClick('Entregue') }
          >
            Marcar como entregue
            { console.log(status, 'status') }
          </button>
        )}
        { user.role === 'seller' && (
          buttonsSeller
            .map((value) => renderButtonsSeller(value))
        ) }
      </header>
      { order.sale.products
      && order.sale.products.map(({ name, quantity, price }, index) => (
        <OrderProducts
          key={ name }
          data={ { name, index, quantity, price, role: user.role } }
        />
      )) }
      <p data-testid={ `${user.role}_order_details__element-order-total-price` }>
        { order.sale.totalPrice.replace(/\./ig, ',') }
      </p>
    </section>
  );
}

export default OrderDetails;

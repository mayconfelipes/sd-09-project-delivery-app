import React, { useEffect, useState } from 'react';
import socket from '../services/api/socket';

const StatusOrder = () => {
  const [role, setRole] = useState('');
  const [orderStatus, setOrderStatus] = useState('Pendente');
  console.log(role);

  socket.on('deliveredOrder', () => {
    setOrderStatus('Entregue');
  });

  socket.on('acceptOrder', () => {
    setOrderStatus('Preparando');
  });

  socket.on('deliverOrder', () => {
    setOrderStatus('Em Trânsito');
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setRole(user.role);
  }, []);

  const handleDeliveredClick = () => {
    socket.emit('deliveredOrder');
  };

  const renderDeliveredBtns = () => (
    <button
      type="button"
      onClick={ handleDeliveredClick }
    >
      Marcar como entrege
    </button>
  );

  const renderCustomerStatus = () => orderStatus === 'Em Trânsito'
    && renderDeliveredBtns();

  const renderSellerStatus = () => {
    if (orderStatus === 'Pendente') {
      return (
        <button
          type="button"
          onClick={ () => socket.emit('acceptOrder') }
        >
          Aceitar Pedido
        </button>
      );
    }
    return orderStatus === 'Preparando' && (
      <button
        type="button"
        onClick={ () => socket.emit('deliverOrder') }
      >
        Pedido saiu para entrega
      </button>
    );
  };

  return (
    <div style={ { marginTop: '40px' } }>
      { role === 'customer' && renderCustomerStatus() }
      { role === 'seller' && renderSellerStatus() }
      <p>
        Status do Pedido:
        { ' ' }
        { orderStatus }
      </p>
      { renderCustomerStatus() }
    </div>
  );
};

export default StatusOrder;

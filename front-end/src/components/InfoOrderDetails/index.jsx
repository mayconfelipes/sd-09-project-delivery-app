import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import style from './infoOrderDetails.module.scss';

import socket from '../../api/socket';

const InfoOrderDetails = ({
  shouldSellerApear = true,
  shouldOrderStatusApear = true,
  dataTestIdOrderId,
  dataTestIdCustomerDelivery,
  dataTestIdSeller,
  dataTestIdOrderDate,
  dataTestIdPreparingCheck,
  dataTestIdDeliveryStatus,
  dataTestIdDeliveryCheck,
  order,
  sellerName,
  deliveryStatus,
  date,
  orderStatus,
  deliveryCheck,
  shouldCustomerDeliverApear,
}) => {
  const [newStatus, setNewStatus] = useState();

  const preparing = 'Preparando';
  const delivering = 'Em Trânsito';
  const delivered = 'Entregue';

  useEffect(() => {
    setNewStatus(deliveryStatus);
  }, [deliveryStatus]);

  const onHandlePreparingStatus = () => {
    socket.emit('statusChange', { id: order, status: preparing });
  };

  const onHandleDeliveringStatus = () => {
    socket.emit('statusChange', { id: order, status: delivering });
  };

  const onHandleCheckCustomerStatus = () => {
    socket.emit('statusChange', { id: order, status: delivered });
  };

  useEffect(() => {
    socket.on('statusChanged', (data) => data.id === order && setNewStatus(data.status));
  }, [order, newStatus, deliveryStatus]);

  return (
    <div className={ style.infoOrderDetails }>
      <p className={ style.span }>
        PEDIDO
        <span data-testid={ dataTestIdOrderId }>{` 000${order}`}</span>
      </p>
      {shouldSellerApear
    && (
      <p>
        P. Vend:
        {' '}
        <span
          data-testid={ dataTestIdSeller }
        >
          {sellerName}
        </span>
      </p>
    )}
      <p data-testid={ dataTestIdOrderDate } className={ style.date }>{date}</p>
      <button
        type="button"
        data-testid={ dataTestIdDeliveryStatus }
        className={ style.status }
      >
        {newStatus}
      </button>
      {shouldOrderStatusApear
    && (
      <button
        type="button"
        data-testid={ dataTestIdPreparingCheck }
        className={ style.orderStatus }
        onClick={ onHandlePreparingStatus }
        disabled={ newStatus === preparing || newStatus === delivering
          || newStatus === delivered }
      >
        {orderStatus}
      </button>)}
      {shouldOrderStatusApear
      && (
        <button
          type="button"
          data-testid={ dataTestIdDeliveryCheck }
          className={ style.markAsDelivered }
          onClick={ onHandleDeliveringStatus }
          disabled={ !newStatus === preparing || newStatus === delivering
      || newStatus === delivered || newStatus === 'Pendente' }
        >
          {deliveryCheck}
        </button>
      )}
      {shouldCustomerDeliverApear
      && (
        <button
          type="button"
          data-testid={ dataTestIdCustomerDelivery }
          className={ style.markAsDelivered }
          onClick={ onHandleCheckCustomerStatus }
          disabled={ newStatus === preparing || newStatus === 'Pendente'
          || newStatus === delivered }
        >
          MARCAR COMO ENTREGUE
        </button>
      )}

    </div>
  );
};

export default InfoOrderDetails;

InfoOrderDetails.propTypes = {
  shouldSellerApear: P.bool,
  shouldOrderStatusApear: P.bool,
  dataTestIdOrderId: P.string.isRequired,
  dataTestIdCustomerDelivery: P.string,
  dataTestIdSeller: P.string,
  dataTestIdOrderDate: P.string.isRequired,
  dataTestIdDeliveryStatus: P.string.isRequired,
  dataTestIdPreparingCheck: P.string,
  dataTestIdDeliveryCheck: P.string,
  order: P.number.isRequired,
  sellerName: P.string,
  deliveryStatus: P.string.isRequired,
  date: P.string.isRequired,
  orderStatus: P.string,
  deliveryCheck: P.string,
  shouldCustomerDeliverApear: P.bool,
};

InfoOrderDetails.defaultProps = {
  shouldSellerApear: false,
  shouldOrderStatusApear: false,
  shouldCustomerDeliverApear: false,
  orderStatus: 'Pendente',
  dataTestIdPreparingCheck: '',
  dataTestIdDeliveryCheck: '',
  dataTestIdCustomerDelivery: '',
  dataTestIdSeller: '',
  sellerName: '',
  deliveryCheck: '',
};

import React from 'react';
import P from 'prop-types';
import style from './infoOrderDetails.module.scss';

const InfoOrderDetails = ({
  shouldSellerApear = true,
  shouldOrderStatusApear = true,
  dataTestIdOrderId,
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
  handleClickPreparing,
  handleClickDelivering,
}) => (
  <div className={ style.infoOrderDetails }>
    <p className={ style.span }>
      PEDIDO
      <span data-testid={ dataTestIdOrderId }>{order}</span>
    </p>
    {shouldSellerApear
    && (
      <p>
        P. Vend:
        {' '}
        <span
          data-testid={ dataTestIdSeller }
        >
          {sellerName === 'Delivery App Admin' && 'Fulana Pereira'}
        </span>
      </p>
    )}
    <p data-testid={ dataTestIdOrderDate } className={ style.date }>{date}</p>
    <button
      type="button"
      data-testid={ dataTestIdDeliveryStatus }
      className={ style.status }
    >
      {deliveryStatus}
    </button>
    {shouldOrderStatusApear
    && (
      <button
        type="button"
        data-testid={ dataTestIdPreparingCheck }
        className={ style.orderStatus }
        onClick={ handleClickPreparing }
        disabled={ deliveryStatus === 'Preparando'
        || deliveryStatus === 'Em Trânsito' || deliveryStatus === 'Entregue' }
      >
        {orderStatus}
      </button>)}
    <button
      type="button"
      data-testid={ dataTestIdDeliveryCheck }
      className={ style.markAsDelivered }
      onClick={ handleClickDelivering }
      disabled={ !deliveryStatus === 'Preparando' || deliveryStatus === 'Em Trânsito'
      || deliveryStatus === 'Entregue' || deliveryStatus === 'Pendente' }
    >
      {deliveryCheck}
    </button>
  </div>
);

export default InfoOrderDetails;

InfoOrderDetails.propTypes = {
  shouldSellerApear: P.bool,
  shouldOrderStatusApear: P.bool,
  dataTestIdOrderId: P.string.isRequired,
  dataTestIdSeller: P.string,
  dataTestIdOrderDate: P.string.isRequired,
  dataTestIdDeliveryStatus: P.string.isRequired,
  dataTestIdPreparingCheck: P.string.isRequired,
  dataTestIdDeliveryCheck: P.string.isRequired,
  order: P.string.isRequired,
  sellerName: P.string,
  deliveryStatus: P.string.isRequired,
  date: P.string.isRequired,
  orderStatus: P.string.isRequired,
  deliveryCheck: P.string.isRequired,
  handleClickPreparing: P.func,
  handleClickDelivering: P.func,
};

InfoOrderDetails.defaultProps = {
  shouldSellerApear: false,
  shouldOrderStatusApear: false,
  dataTestIdSeller: '',
  sellerName: '',
  handleClickPreparing: () => {},
  handleClickDelivering: () => {},
};

import React from 'react';
import P from 'prop-types';
import style from './infoOrderDetails.module.scss';

const InfoOrderDetails = ({
  shouldSellerApear = true,
  shouldOrderStatusApear = true,
  dataTestIdOrderId,
  dataTestIdSeller,
  dataTestIdOrderDate,
  dataTestIdDeliveryStatus,
  dataTestIdDeliveryCheck,
}) => (
  <div className={ style.infoOrderDetails }>
    <p className={ style.span }>
      PEDIDO
      <span data-testid={ dataTestIdOrderId }>0003</span>
      ;
    </p>
    {shouldSellerApear
    && (
      <p>
        P. Vend:
        <span data-testid={ dataTestIdSeller }>Fulana 1</span>
      </p>
    )}
    <p data-testid={ dataTestIdOrderDate } className={ style.date }>21/08/2021</p>
    <p data-testid={ dataTestIdDeliveryStatus } className={ style.status }>Entregue</p>
    {shouldOrderStatusApear && <p className={ style.orderStatus }>PREPARAR PEDIDO</p>}
    <p
      data-testid={ dataTestIdDeliveryCheck }
      className={ style.markAsDelivered }
    >
      MARCAR COMO ENTREGUE
    </p>
  </div>
);

export default InfoOrderDetails;

InfoOrderDetails.propTypes = {
  shouldSellerApear: P.bool,
  shouldOrderStatusApear: P.bool,
  dataTestIdOrderId: P.string.isRequired,
  dataTestIdSeller: P.string.isRequired,
  dataTestIdOrderDate: P.string.isRequired,
  dataTestIdDeliveryStatus: P.string.isRequired,
  dataTestIdDeliveryCheck: P.string.isRequired,
};

InfoOrderDetails.defaultProps = {
  shouldSellerApear: false,
  shouldOrderStatusApear: false,
};

import React from 'react';
import P from 'prop-types';
import style from './productStatus.module.scss';

const ProductStatus = ({
  dataTestIdOrderId,
  dataTestIdOrderStatus,
  dataTestIdOrderDate,
  dataTestIdOrderPrice,
  dataTestIdAddress,
  orderNumber,
  orderStatus,
  orderDate,
  orderPrice,
  orderAddress,
  shouldAddressApear,
}) => {
  const productOrderStyle = shouldAddressApear
    ? style.productOrderLarge : style.productOrder;

  let orderCardStatus = null;
  switch (orderStatus) {
  case 'Pendente':
    orderCardStatus = style.orangeOrder;
    break;
  case 'Preparando':
    orderCardStatus = style.greenOrder;
    break;
  case 'Em Trânsito':
    orderCardStatus = style.blackBlueOrder;
    break;
  case 'Entregue':
    orderCardStatus = style.blueOrder;
    break;
  default:
    break;
  }

  return (
    <div className={ style.productStatusContainer }>
      <div className={ productOrderStyle }>
        <p>Pedido</p>
        <span data-testid={ dataTestIdOrderId }>{orderNumber}</span>
      </div>
      <div className={ style.productDataContainer }>
        <div className={ style.productData }>
          <p
            data-testid={ dataTestIdOrderStatus }
            className={ orderCardStatus }
          >
            {orderStatus}
          </p>
          <div className={ style.productPrice }>
            <p data-testid={ dataTestIdOrderDate }>{orderDate}</p>
            <span data-testid={ dataTestIdOrderPrice }>{orderPrice}</span>
          </div>
        </div>
        {shouldAddressApear
        && (
          <p
            data-testid={ dataTestIdAddress }
            className={ style.productAddress }
          >
            {orderAddress}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductStatus;

ProductStatus.propTypes = {
  dataTestIdOrderId: P.string.isRequired,
  dataTestIdOrderStatus: P.string.isRequired,
  dataTestIdOrderDate: P.string.isRequired,
  dataTestIdOrderPrice: P.string,
  dataTestIdAddress: P.string,
  orderNumber: P.string,
  orderStatus: P.string,
  orderDate: P.string,
  orderPrice: P.string,
  orderAddress: P.string,
  shouldAddressApear: P.bool,
};

ProductStatus.defaultProps = {
  dataTestIdOrderPrice: '',
  dataTestIdAddress: '',
  orderNumber: '0001',
  orderStatus: 'PENDENTE',
  orderDate: '23/08/21',
  orderPrice: '0,00',
  orderAddress: 'Rua fulana de Tal',
  shouldAddressApear: '',
};

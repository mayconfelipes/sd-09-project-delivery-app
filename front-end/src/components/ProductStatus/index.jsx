import React from 'react';
import P from 'prop-types';
import style from './productStatus.module.scss';

const ProductStatus = ({
  dataTestIdOrderId,
  dataTestIdOrderStatus,
  dataTestIdOrderDate,
  dataTestIdOrderPrice,
  dataTestIdAddress,
  orderNumber = '0001',
  orderStatus = 'PENDENTE',
  orderDate = '23/08/21',
  orderPrice = '0,00',
  orderAddress = 'Rua fulana de Tal',
  shouldAddressApear = true,
}) => {
  const productOrderStyle = shouldAddressApear
    ? style.productOrderLarge : style.productOrder;

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
            className={ style.productStatus }
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
  dataTestIdOrderPrice: P.string.isRequired,
  dataTestIdAddress: P.string.isRequired,
  orderNumber: P.string.isRequired,
  orderStatus: P.string.isRequired,
  orderDate: P.string.isRequired,
  orderPrice: P.string.isRequired,
  orderAddress: P.string.isRequired,
  shouldAddressApear: P.string.isRequired,
};

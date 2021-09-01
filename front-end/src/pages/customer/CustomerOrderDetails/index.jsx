import React from 'react';
// import P from 'prop-types';

import DescriptionsBar from '../../../components/DescriptionsBar';
import GridOrderDetails from '../../../components/GridOrderDetails';
import InfoOrderDetails from '../../../components/InfoOrderDetails';
import NavBar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import useGlobalContext from '../../../context/GlobalStateProvider';

import style from './orderDetails.module.scss';

const CustomerOrderDetails = () => {
  const { totalPrice } = useGlobalContext();
  const sellerTestId = 'customer_order_details__element-order-details-label-seller-name';
  const dateTestId = 'customer_order_details__element-order-details-label-order-date';
  const statusTId = 'customer_order_details__element-order-details-label-delivery-status';
  const orderTestId = 'customer_order_details__element-order-details-label-order-id';

  // const { match } = props;
  // const { params } = match;
  // const { id } = params;
  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <div className={ style.totalContainer }>
        <div className={ style.barContainer }>
          <InfoOrderDetails
            shouldOrderStatusApear={ false }
            dataTestIdOrderId={ orderTestId }
            dataTestIdSeller={ sellerTestId }
            dataTestIdOrderDate={ dateTestId }
            dataTestIdDeliveryStatus={ statusTId }
            dataTestIdDeliveryCheck="customer_order_details__button-delivery-check"
          />
          <GridOrderDetails />
          {JSON.parse(localStorage.getItem('cart'))
            .map(({ id, quantity, price, description }, index) => {
              const intPrice = parseFloat(price.replace(',', '.'));
              const multPrice = parseFloat(quantity) * intPrice;
              const totPrice = (Math.round(multPrice * 100) / 100).toFixed(2);
              const toStringNumber = totPrice.toString().replace('.', ',');
              return (
                <DescriptionsBar
                  key={ id }
                  id={ index }
                  userOrProductName={ description }
                  emailOrQuantity={ quantity }
                  userTypeOrValue={ price }
                  deleteOrPrice={ toStringNumber }
                  shouldDeleteApear={ false }
                  dataTestIdId={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                  dataTestIdUserOrProductName={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                  dataTestIdEmailOrQuantity={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                  dataTestIdUserTypeOrValue={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                  dataTestIdDeleteOrPrice={
                    `customer_order_details__element-order-total-price-${index}`
                  }
                />
              );
            })}

        </div>
        <PrimaryButton>
          {`Total R$: ${totalPrice}`}
        </PrimaryButton>
      </div>
    </>
  );
};

export default CustomerOrderDetails;

// CustomerOrderDetails.propTypes = {
//   children: P.node.isRequired,
// };

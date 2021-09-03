import React, { useEffect } from 'react';
// import P from 'prop-types';

import DescriptionsBar from '../../../components/DescriptionsBar';
import GridOrderDetails from '../../../components/GridOrderDetails';
import InfoOrderDetails from '../../../components/InfoOrderDetails';
import NavBar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';

import style from './orderDetails.module.scss';

const CustomerOrderDetails = () => {
  const sellerTestId = 'customer_order_details__element-order-details-label-seller-name';
  const dateTestId = 'customer_order_details__element-order-details-label-order-date';
  const statusTId = 'customer_order_details__element-order-details-label-delivery-status';
  // const { match } = props;
  // const { params } = match;
  // const { id } = params;
  const index = 0;

  useEffect(() => {
    fetch('http://localhost:3001/seller')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <div className={ style.totalContainer }>
        <InfoOrderDetails
          shouldOrderStatusApear={ false }
          dataTestIdOrderId="customer_order_details__element-order-details-label-order-id"
          dataTestIdSeller={ sellerTestId }
          dataTestIdOrderDate={ dateTestId }
          dataTestIdDeliveryStatus={ statusTId }
          dataTestIdDeliveryCheck="customer_order_details__button-delivery-check"
        />
        <div className={ style.barContainer }>
          <GridOrderDetails />
          {products.map(({ id, name, price, totalPrice, quantity }) => (
            <DescriptionsBar
              id={ id }
              userOrProductName={ name }
              emailOrQuantity={ quantity }
              userTypeOrValue={ price }
              deleteOrPrice={ totalPrice }
              shouldDeleteApear={ false }
              key={ id }
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
            />))}
          ;
        </div>
        <PrimaryButton>Total R$: 4,80</PrimaryButton>
      </div>
    </>
  );
};

export default CustomerOrderDetails;

// CustomerOrderDetails.propTypes = {
//   children: P.node.isRequired,
// };

import React from 'react';
// import P from 'prop-types';

import DescriptionsBar from '../../../components/DescriptionsBar';
import GridOrderDetails from '../../../components/GridOrderDetails';
import InfoOrderDetails from '../../../components/InfoOrderDetails';
import NavBar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';

import style from './sellerOrderDetails.module.scss';

const SellerOrderDetails = () => {
  const index = 0;
  return (
    <div>
      <NavBar orders="" products="PEDIDOS" />
      <h1>Detalhe do Pedido (Área vendedor)</h1>
      <div className={ style.totalContainer }>
        <InfoOrderDetails
          shouldSellerApear={ false }
        />
        <div className={ style.barContainer }>
          <GridOrderDetails />
          <DescriptionsBar
            id="1"
            userOrProductName="Cerveja heineken"
            emailOrQuantity="2"
            userTypeOrValue="R$ 2,40"
            deleteOrPrice="R$ 4,80"
            shouldDeleteApear={ false }
            dataTestIdId={
              `seller_order_details__element-order-table-item-number-${index}`
            }
            dataTestIdUserOrProductName={
              `seller_order_details__element-order-table-name-${index}`
            }
            dataTestIdEmailOrQuantity={
              `seller_order_details__element-order-table-quantity-${index}`
            }
            dataTestIdUserTypeOrValue={
              `seller_order_details__element-order-table-unit-price-${index}`
            }
            dataTestIdDeleteOrPrice={
              `seller_order_details__element-order-table-sub-total-${index}`
            }
          />
        </div>
        <PrimaryButton
          dataTestId="seller_order_details__element-order-total-price"
        >
          Total R$: 4,80

        </PrimaryButton>
      </div>
    </div>

  );
};

export default SellerOrderDetails;

// SellerOrderDetails.propTypes = {
//   children: P.node.isRequired,
// };

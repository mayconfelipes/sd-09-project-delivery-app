import React from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';

import style from './orders.module.scss';

const SellerOrders = () => {
  const id = 0;
  const value = 4.50;
  return (
    <>
      <NavBar orders="" products="PEDIDOS" />
      <div className={ style.productStatusContainer }>
        <Link className={ style.productStatus } to={ `/seller/orders/${id}` }>
          <ProductStatus
            orderPrice={ `R$ ${value}` }
            shouldAddressApear
            dataTestIdOrderId={ `seller_orders__element-order-id-${id}` }
            dataTestIdOrderStatus={ `seller_orders__element-delivery-status-${id}` }
            dataTestIdOrderDate={ `seller_orders__element-order-date-${id}` }
            dataTestIdOrderPrice={ `seller_orders__element-card-price-${id}` }
            dataTestIdAddress={ `seller_orders__element-card-address-${id}` }
          />
        </Link>
      </div>
    </>
  );
};

export default SellerOrders;

// SellerOrders.propTypes = {
//   children: P.node.isRequired,
// };

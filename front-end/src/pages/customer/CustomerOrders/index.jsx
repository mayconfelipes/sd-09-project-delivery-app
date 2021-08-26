import React from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';

import style from './orders.module.scss';

const CustomerOrders = () => {
  const id = 0;
  const value = 4.50;
  return (
    <>
      <NavBar />
      <div className={ style.productStatusContainer }>
        <Link className={ style.productStatus } to={ `/customer/orders/${id}` }>
          <ProductStatus
            orderPrice={ `R$ ${value}` }
            shouldAddressApear={ false }
            dataTestIdOrderId={ `customer_orders__element-order-id-${id}` }
            dataTestIdOrderStatus={ `customer_orders__element-delivery-status-${id}` }
            dataTestIdOrderDate={ `customer_orders__element-order-date-${id}` }
          />
        </Link>
      </div>
    </>
  );
};

export default CustomerOrders;

// CustomerOrders.propTypes = {
//   children: P.node.isRequired,
// };

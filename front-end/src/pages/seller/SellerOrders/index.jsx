import React, { useState, useEffect } from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';
import formatDate from '../../../util/formatDate';

import { getAllSales } from '../../../api/sales';
import style from './orders.module.scss';

const SellerOrders = () => {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      getAllSales(localItem.token).then((res) => {
        setSales(res);
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <NavBar orders="" products="PEDIDOS" />
      <div className={ style.productStatusContainer }>
        {sales.map(({
          id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) => {
          const newDate = formatDate(saleDate);
          const priceToString = totalPrice.toString().replace('.', ',');
          return (
            <Link
              key={ id }
              className={ style.productStatus }
              to={ `/seller/orders/${id}` }
            >
              <ProductStatus
                orderPrice={ `${priceToString}` }
                orderStatus={ status }
                orderDate={ newDate }
                orderNumber={ `000${id}` }
                orderAddress={ `${deliveryAddress}, ${deliveryNumber}` }
                shouldAddressApear
                dataTestIdOrderId={ `seller_orders__element-order-id-${id}` }
                dataTestIdOrderStatus={ `seller_orders__element-delivery-status-${id}` }
                dataTestIdOrderDate={ `seller_orders__element-order-date-${id}` }
                dataTestIdOrderPrice={ `seller_orders__element-card-price-${id}` }
                dataTestIdAddress={ `seller_orders__element-card-address-${id}` }
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SellerOrders;

// SellerOrders.propTypes = {
//   children: P.node.isRequired,
// };

import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import socket from '../../../api/socket';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';
import formatDate from '../../../util/formatDate';

import { saleById } from '../../../api/sales';

import style from './orders.module.scss';

const CustomerOrders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState([]);
  const [newStatus, setNewStatus] = useState();

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      saleById(localItem.token)
        .then((data) => {
          setSale(data);
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    socket.on('statusChanged', (data) => {
      setNewStatus(data);
    });
  }, []);

  const manegeredStatus = (id, status) => {
    if (newStatus && newStatus.id === id) {
      return newStatus.status;
    }
    return status;
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <NavBar />
      <div className={ style.productStatusContainer }>
        {sale.map(({ id, status, saleDate, totalPrice }) => {
          const newDate = formatDate(saleDate);
          const priceToString = totalPrice.toString().replace('.', ',');
          return (
            <Link
              key={ id }
              className={ style.productStatus }
              to={ `/customer/orders/${id}` }
            >
              <ProductStatus
                orderPrice={ priceToString }
                orderStatus={ manegeredStatus(id, status) }
                orderDate={ newDate }
                orderNumber={ `000${id}` }
                shouldAddressApear={ false }
                dataTestIdOrderId={ `customer_orders__element-order-id-${id}` }
                dataTestIdOrderStatus={ `customer_orders__element-delivery-status-${id}` }
                dataTestIdOrderDate={ `customer_orders__element-order-date-${id}` }
                dataTestIdOrderPrice={ `customer_orders__element-card-price-${id}` }
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CustomerOrders;

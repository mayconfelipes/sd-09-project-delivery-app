import React, { useState, useEffect } from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';
// import { saleById } from '../../../api/sales';
import formatDate from '../../../util/formatDate';
import style from './orders.module.scss';

const CustomerOrders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  useEffect(() => {
    fetch('http://localhost:3001/sales/user', {
      method: 'GET',
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSale(data);
      });
    setIsLoading(false);
  }, [token]);

  console.log(sale[0]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <NavBar />
      <div className={ style.productStatusContainer }>
        { console.log(sale)}
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
                orderStatus={ status }
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

// CustomerOrders.propTypes = {
//   children: P.node.isRequired,
// };

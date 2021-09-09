import { array } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { formatDate, formatCurrency } from '../../utils/helpers';
import './OrderCard.css';

const OrderCard = (props) => {
  const [pageSeller, setPageSeller] = useState(false);
  const [address, setAddress] = useState('customer');
  const [dataTestId, setDataTestId] = useState('customer_orders__element');
  const match = useRouteMatch();
  const { orderList } = props;

  useEffect(() => {
    if (match.path === '/seller/orders') {
      setAddress('seller');
      setDataTestId('seller_orders__element');
      setPageSeller(true);
    }
  }, [match.path]);

  if (!orderList) return <h1>Loading...</h1>;

  return (
    <div className="order-container">
      {
        orderList.map(
          ({ id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber }) => (
            <div className="order-card" key={ id }>
              <Link
                to={ `/${address}/orders/${id}` }
                data-testid={ `${dataTestId}-order-id-${id}` }
              >
                <span data-testid={ `${dataTestId}-order-id-${id}` }>
                  {id}
                </span>
              </Link>
              <span data-testid={ `${dataTestId}-delivery-status-${id}` }>
                {status}
              </span>
              <span data-testid={ `${dataTestId}-order-date-${id}` }>
                {formatDate(saleDate)}
              </span>
              <span data-testid={ `${dataTestId}-card-price-${id}` }>
                {formatCurrency(totalPrice)}
              </span>
              { pageSeller && <span>{deliveryAddress}</span>}
              { pageSeller && <span>{deliveryNumber}</span>}
            </div>
          ),
        )
      }
    </div>
  );
};

OrderCard.propTypes = {
  orderList: array,
}.isRequired;

export default OrderCard;

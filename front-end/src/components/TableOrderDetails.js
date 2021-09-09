import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';

// import useInfoUsers from '../hooks/useInfousers';

function TableOrderDetails(props) {
  const datatestid = 'customer_order_details__';
  const [orderDetails, setOrderDetails] = useState({});
  const { id } = props;

  const getOrderDetails = ((useCallback(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      method: 'get',
      url: `http://localhost:3001/sales/${id}`,
      headers: {
        Authorization: user.token,
      },
    };
    axios(config)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error('erro: ', error);
      });
  })));

  useEffect(() => {
    getOrderDetails();
  }, []);

  const { saleDate, status } = orderDetails;

  return (Object.keys(orderDetails).length === 0 ? <span>loading...</span> : (
    <div>
      <h3>Detalhe do Pedido</h3>
      <table>
        <thead>
          <tr>
            <th
              data-testid={ `${datatestid}element-order-details-label-order-id` }
            >
              {`PEDIDO ${id}`}
            </th>
            <th
              data-testid={ `${datatestid}element-order-details-label-seller-name` }
            >
              {orderDetails.seller.name}
            </th>
            <th
              data-testid={ `${datatestid}element-order-details-label-order-date` }
            >
              {moment(saleDate).format('DD/MM/YYYY')}
            </th>
            <th
              data-testid={ `${datatestid}element-order-details-label-delivery-status` }
            >
              {status}
            </th>
            <button
              type="button"
              data-testid={ `${datatestid}button-delivery-check` }
              disabled
            >
              MARCAR COMO ENTREGUE
            </button>
          </tr>
        </thead>
      </table>
    </div>));
}

TableOrderDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TableOrderDetails;

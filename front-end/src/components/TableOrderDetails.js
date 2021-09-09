import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

// import useInfoUsers from '../hooks/useInfousers';

function TableOrderDetails(props) {
  const datatestid = 'customer_orders_details__';
  const [orderDetails, setOrderDetails] = useState({});
  const { id } = props;

  const getOrderDetails = ((useCallback(async () => {
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
        console.log(response.data);
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  })));

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);
  console.log(getOrderDetails());

  const { saleDate, status } = orderDetails;
  console.log(orderDetails);

  return (
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
              Fulana Pereira
            </th>
            <th
              data-testid={ `${datatestid}element-order-details-label-order-date` }
            >
              {moment(saleDate).format('DD/HH/YYYY')}
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
    </div>);
}

TableOrderDetails.propTypes = {
  sellerid: number,
}.isRequired;

export default TableOrderDetails;

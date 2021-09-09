import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import useInfoUsers from '../hooks/useInfousers';

function TableOrderDetails() {
  const datatestid = 'customer_orders_details__';
  const [orderDetails, setOrderDetails] = useState({});
  const sellerId = 2;
  // const user = JSON.parse(localStorage.getItem('user'));

  // const headersToken = (token) => ({
  //   'Content-Type': 'application/json',
  //   Authorization: token,
  // });

  // const getSaleById = async (id, token) => {
  //   const headers = headersToken(token);
  //   const res = await axios.get(`http://localhost:3001/sales/${id}`, { headers });
  //   return res;
  // };

  // const getUserById = async (id, token) => {
  //   const headers = headersToken(token);
  //   const res = await axios.get(`${BASEURL}${USERS}/${id}`, { headers });
  //   return res;
  // };

  // const getOrderById = async (id, token) => {
  //   const { data } = await axios.get(`${URL_BASE}/sales/${id}`);
  //   return data;
  // };

  const getOrderDetails = (async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      method: 'get',
      url: `http://localhost:3001/sales/${sellerId}`,
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
  });

  useEffect(() => {
    getOrderDetails();
  }, [setOrderDetails]);
  console.log(getOrderDetails());

  const { id, saleDate, status } = orderDetails;
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
              {saleDate}
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

export default TableOrderDetails;

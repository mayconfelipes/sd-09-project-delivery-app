import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { createButton } from '../../utils/creators';
import { getSale } from '../../services/api';
import Navbar from '../../components/Seller/Navbar';

const route = 'seller_order_details';

function OrdersDetails() {
  const { apiResponse } = useContext(LoginContext);
  const { id } = useParams();
  const [sale, setSale] = useState({});

  useEffect(() => {
    const getSaleWithId = async () => {
      const response = await getSale(id);
      setSale(response);
    };

    getSaleWithId();
  }, [id]);

  return (
    <>
      <Navbar name={ apiResponse.name } />
      <section>
        <h1>DETALHES DO PEDIDO</h1>
        <p
          data-testid={ `${route}__element-order-details-label-delivery-status` }
        >
          delivery status
        </p>
        <p data-testid={ `${route}__element-order-details-label-order-date` }>
          {sale.saleDate}
        </p>
        { createButton('preparing-check', 'preparing-check', () => {}, route) }
        { createButton('dispatch-check', 'dispatch-check', () => {}, route) }
        <p data-testid={ `${route}__element-order-total-price` }>
          {`R$ ${sale.totalPrice.replace(/\./, ',')}`}
        </p>
      </section>
    </>
  );
}

export default OrdersDetails;

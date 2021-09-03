import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { createButton } from '../../utils/creators';
import { getSaleByid } from '../../services/api';
import Navbar from '../../components/Seller/Navbar';
import { dispatchCheck, preparingCheck } from '../../data/ButtonOptions';
import OrderDetailsTable from '../../components/Seller/OrderDetailsTable';

const route = 'seller_order_details';

function OrdersDetails() {
  const { apiResponse } = useContext(LoginContext);
  const { id } = useParams();
  const [sale, setSale] = useState({});

  useEffect(() => {
    const getSaleWithId = async () => {
      const response = await getSaleByid(id);
      setSale(response);
    };

    getSaleWithId();
  }, [id]);

  if (!sale) return <p>Carregando...</p>;

  return (
    <>
      <Navbar name={ apiResponse.name } />
      <section>
        <h1>DETALHES DO PEDIDO</h1>
        <p
          data-testid={ `${route}__element-order-details-label-delivery-status` }
        >
          {sale.status}
        </p>
        <p data-testid={ `${route}__element-order-details-label-order-date` }>
          {sale.saleDate}
        </p>
        <h1>TABELA DE DETALHES DA VENDA</h1>
        { createButton({ ...preparingCheck, onClick: () => {}, route }) }
        { createButton({ ...dispatchCheck, onClick: () => {}, route }) }
        { sale.products && sale.products.map((item, index) => (
          <OrderDetailsTable item={ item } index={ index } key={ item.id } />
        )) }
        <p data-testid={ `${route}__element-order-total-price` }>
          {`R$ ${sale.totalPrice} `}
        </p>
      </section>
    </>
  );
}

export default OrdersDetails;

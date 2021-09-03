import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Header from '../components/Header';

const FOUR = 4;

const DetalhesPedido = () => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState('');
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));
  const { id } = useParams();

  useEffect(
    () => {
      if (userData) {
        const { token } = userData;
        const config = {
          headers: { Authorization: `${token}` },
        };
        const ORDER_ENDPOINT = `http://localhost:3001/api/sales/${id}`;
        const fetchData = async () => {
          await axios.get(ORDER_ENDPOINT, config)
            .then((d) => setOrder(d.data))
            .catch((e) => setError(e.response.data.message));
        };
        fetchData();
      }
    }, [id, userData],
  );
  console.log(error);
  if (!userData || error) {
    localStorage.clear();
    return (<Redirect to={ { pathname: '/login', state: { error } } } />);
  }

  const renderTable = () => (
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        { order && order.products ? order.products.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index + 1}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index + 1}`
              }
            >
              { product.name }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index + 1}`
              }
            >
              { product.quantity }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-sub-total-${index + 1}`
              }
            >
              { `R$ ${product.price}` }
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-total-price-${index + 1}`
              }
            >
              { `R$ ${(parseFloat(product.price) * parseInt(product.quantity, 10))
                .toFixed(2)}` }
            </td>
          </tr>)) : null }
      </tbody>
    </table>
  );

  const formatDate = () => {
    const TEN = 10;
    if (order.saleDate) {
      const receivedDate = order.saleDate.slice(0, TEN).split('-');

      return `${receivedDate[2]}/${receivedDate[1]}/${receivedDate[0]}`;
    }
  };

  return (
    <>
      <Header />
      <main className="order__details">
        <h3>Detalhe do Pedido</h3>
        { order && order.seller ? (
          <section className="products__list">
            <header>
              <span
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                {`Pedido ${String(order.id).padStart(FOUR, 0)}`}
              </span>
              <span
                data-testid="
              customer_order_details__element-order-details-label-seller-name"
              >
                { `P. Vend: ${order.seller.name}` }
              </span>
              <span
                data-testid="
              customer_order_details__element-order-details-label-order-date"
              >
                { formatDate() }
              </span>
              <span
                data-testid="
              customer_order_details__element-order-details-label-delivery-status"
              >
                { order.status }
              </span>
              <span data-testid="customer_order_details__button-delivery-check">
                MARCAR COMO ENTREGUE
              </span>
            </header>
            { renderTable() }
            <h1>{ `Total: R$ ${order.totalPrice}` }</h1>
          </section>
        ) : null}
      </main>
    </>
  );
};

export default DetalhesPedido;

import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Header from '../components/Header';
import ProductsTable from '../components/ProductsTable';
import SocketsContext from '../context/SocketsContext';

const FOUR = 4;

const getPrefix = (role) => (
  role === 'customer'
    ? 'customer_order_details__element-order-'
    : 'seller_order_details__element-order-'
);

const DetalhesPedido = () => {
  const { socket } = useContext(SocketsContext);

  const [order, setOrder] = useState({});
  const [error, setError] = useState('');
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  const { id } = useParams();
  const { role } = userData;

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

  useEffect(
    () => socket
      && socket.on('updateOrderStatus', ({ order: updtOrder }) => (
        updtOrder.id === order.id && setOrder(updtOrder)
      )),
    [order.id, socket],
  );

  if (!userData || error) {
    localStorage.clear();
    return (<Redirect to={ { pathname: '/login', state: { error } } } />);
  }

  const formatDate = () => {
    const TEN = 10;
    if (order.saleDate) {
      const receivedDate = order.saleDate.slice(0, TEN).split('-');

      return `${receivedDate[2]}/${receivedDate[1]}/${receivedDate[0]}`;
    }
  };

  const updateOrderStatus = async (status) => {
    const PATCH_SALE_ENDPOINT = `http://localhost:3001/api/sales/${order.id}`;
    const payload = { status };
    const config = {
      headers: { Authorization: `${userData.token}` },
    };

    await axios.patch(PATCH_SALE_ENDPOINT, payload, config)
      .then(
        () => {
          if (error) setError('');

          const { status: _, ...orderData } = order;
          const updatedOrder = { status, ...orderData };

          setOrder(updatedOrder);
          socket.emit('updateOrderStatus', { order: updatedOrder });
        },
        () => setError('Falha ao atualizar status do pedido.'),
      );
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
                data-testid={ `${getPrefix(role)}details-label-order-id` }
              >
                {`Pedido ${String(order.id).padStart(FOUR, 0)}`}
              </span>
              <span
                data-testid={ `${getPrefix(role)}details-label-order-date` }
              >
                { formatDate() }
              </span>
              <span
                data-testid={ `${getPrefix(role)}details-label-delivery-status` }
              >
                { order.status }
              </span>
              { role === 'customer' ? (
                <>
                  <span
                    data-testid={ `${getPrefix(role)}details-label-seller-name` }
                  >
                    { `P. Vend: ${order.seller.name}` }
                  </span>
                  <button
                    type="button"
                    data-testid="customer_order_details__button-delivery-check"
                    disabled={ order.status !== 'Em Trânsito' }
                    onClick={ () => updateOrderStatus('Entregue') }
                  >
                    MARCAR COMO ENTREGUE
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    data-testid="seller_order_details__button-preparing-check"
                    disabled={ order.status !== 'Pendente' }
                    onClick={ () => updateOrderStatus('Preparando') }
                  >
                    PREPARAR PEDIDO
                  </button>
                  <button
                    type="button"
                    data-testid="seller_order_details__button-dispatch-check"
                    disabled={ order.status !== 'Preparando' }
                    onClick={ () => updateOrderStatus('Em Trânsito') }
                  >
                    SAIU PARA ENTREGA
                  </button>
                </>
              ) }
            </header>
            <ProductsTable venda={ order } prefix={ getPrefix(role) } />
            <h4
              data-testid={ `${getPrefix(role)}total-price` }
            >
              { `Total: R$ ${order.totalPrice.replace('.', ',')}` }
            </h4>
          </section>
        ) : null}
      </main>
    </>
  );
};

export default DetalhesPedido;

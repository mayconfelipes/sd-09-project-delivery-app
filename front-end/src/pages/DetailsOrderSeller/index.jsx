import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';
import io from '../../socket';
import api from '../../service/axiosApi';
import NotFound from '../../components/notFound';

const DetailsOrderSeller = (props) => {
  const { match: { params: { id } } } = props;
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState('');
  // eslint-disable-next-line max-len
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlciI6eyJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjMwMzUwNjg3LCJleHAiOjE2MzA0MzcwODd9.Gjs1axk3YjO3FZ2fbpCGDriiAAuuZIu-AV7BwvhCwSw';

  useEffect(() => {
    api.get(`/order/${id}`, { headers: { authorization: token } }).then((result) => {
      setOrder(result.data[0]);
      setOrderStatus(result.data[0].status);
    }).catch((err) => console.log(err));
  }, [id]);

  const handleStatus = ({ target: { name } }) => {
    io.emit('updateOrders', { id: order.id, status: name });
  };

  useEffect(() => {
    io.on('updateStatus', (status) => setOrderStatus(status));
  });

  if (orderStatus === '') return <NotFound />;

  return (
    <div>
      <p>
        PEDIDO:
        { order.id }
      </p>
      <p>
        { orderStatus }
      </p>
      <button
        name="Preparando"
        type="submit"
        onClick={ handleStatus }
      >
        PREPARAR PEDIDO
      </button>
      <button name="Em Trânsito" type="submit" onClick={ handleStatus }>
        SAIU PARA ENTREGA
      </button>
    </div>
  );
};

DetailsOrderSeller.propTypes = {
  match: shape().isRequired,
};

export default DetailsOrderSeller;

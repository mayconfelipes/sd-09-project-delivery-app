import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';
import io from '../../socket';
import api from '../../service/axiosApi';
import NotFound from '../../components/NotFound';

const DetailsOrderSeller = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState('');

  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api
      .get(`/order/${id}`, { headers: { authorization: token } })
      .then((result) => {
        setOrder(result.data[0]);
        setOrderStatus(result.data[0].status);
      })
      .catch((err) => console.log(err));
  }, [id, token]);

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
        {order.id}
      </p>
      <p>{orderStatus}</p>
      <button name="Preparando" type="submit" onClick={ handleStatus }>
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

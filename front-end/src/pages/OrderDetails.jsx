import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const getOrderByPk = async () => {
      const response = await api.get(`/sales/${id}`);
      setOrder(response.data);
    };

    getOrderByPk();
  }, [id]);

  return (
    <section>
      <h1>Detalhes do pedido</h1>
      <span>{order}</span>
    </section>
  );
}

export default OrderDetails;

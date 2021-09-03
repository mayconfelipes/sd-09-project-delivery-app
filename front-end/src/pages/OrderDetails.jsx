import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderProducts from '../components/OrderProducts';
// import AppContext from '../hooks/context';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const getSale = async () => {
      const response = await axios.get(`http://localhost:3001/sales/${id}`);
      setOrder(response.data);
    };

    getSale();
  }, [id]);

  return (
    <section>
      <h1>Detalhes do pedido</h1>
      <span>{id}</span>
      { order.products && order.products.map(({ name, quantity, price }, index) => (
        <OrderProducts
          key={ name }
          data={ { name, index, quantity, price } }
        />
      )) }
    </section>
  );
}

export default OrderDetails;

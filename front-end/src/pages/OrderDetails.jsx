import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import TableOrderDetails from '../Components/TableOrderDetails';
import formatDate from '../services/formatDate';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const getOrder = await axios({
          method: 'get',
          url: `http://localhost:3001/sale/${id}`,
        });
        setOrder(getOrder.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, [id]);

  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <TableOrderDetails
        orderId={ order.id }
        sellerName={ order.sellerId }
        orderDate={ formatDate(order.saleDate) }
        orderStatus={ order.status }
        totalPrice={ order.totalPrice }
        products={ order.product }
      />
    </>
  );
}

export default OrderDetails;

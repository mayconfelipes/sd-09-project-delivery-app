import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import TableOrderDetails from '../Components/TableOrderDetails';

function OrderDetails() {
  const [currSale, setCurrSale] = useState();
  const { id } = useParams();

  const fetchSale = async () => {
    console.log('FETCH', id);
    try {
      const getSale = await axios({
        method: 'get',
        url: `http://localhost:3001/customer/orders/${id}`,
      });
      console.log(getSale.dataValues);
      return getSale.dataValues;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getSale = async () => {
      setCurrSale(await fetchSale());
    };
    getSale();
  });

  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <TableOrderDetails sale={ currSale } />
    </>
  );
}

export default OrderDetails;

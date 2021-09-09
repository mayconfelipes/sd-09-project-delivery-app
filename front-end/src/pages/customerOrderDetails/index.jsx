import React, { useEffect, useState } from 'react';
// import Navbar from '../../components/navbar';
import { getOrderById } from '../../services/fetchApi';

const CustomerOrderDetails = () => {
  const [order, setOrder] = useState([]);

  const getOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('cart'));
    const pathName = window.location.pathname;
    console.log(order, setOrder);

    console.log(pathName);
    const ordered = getOrderById(token);
    console.log(ordered);
  };

  useEffect(() => {
    getOrder();
  });

  return (
    <div>
      {/* <Navbar /> */}
      <h1>Bora</h1>
    </div>
  );
};

export default CustomerOrderDetails;

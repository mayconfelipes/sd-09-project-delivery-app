import React, { useEffect, useContext } from 'react';
// import React, { useEffect, useContext } from 'react';
import OrderCard from '../components/OrderCard';
// import { Link } from 'react-router-dom';
import context from '../services/context';
// import * as api from '../services/api';

function CustomersOrders() {
  // const { userInfo, allUsersOrders, setUsersOrders } = useContext(context);
  const { allOrders, setAllOrders } = useContext(context);
  const ordersArray = [
    {
      id: 1,
      saleDate: '01/01/2021',
      status: 'Em preparo',
      totalPrice: '123.00',
    },
    {
      id: 2,
      saleDate: '02/02/2021',
      status: 'Pendente',
      totalPrice: '789.00',
    },
  ];

  // useEffect(() => {
  //   async function getOrders() {
  //     const retrievedOrders = await api.getOrders();
  //     setAllOrders(retrievedOrders);
  //   }

  //   getOrders();
  // });

  useEffect(() => {
    setAllOrders(ordersArray);
  }, []);

  return (
    <section>
      {
        allOrders.map((order) => (
          <OrderCard
            order={ order }
            key={ order.id }
          />
        ))
      }
    </section>
  );
}

export default CustomersOrders;

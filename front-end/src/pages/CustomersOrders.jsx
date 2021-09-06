import React, { useContext, useEffect } from 'react';
// import React from 'react';
import OrderCard from '../components/OrderCard';
import NavBarCustomer from '../components/navBarCustomer';
import ProductsContext from '../context/ProductsContext';
// import '../styles/ordersTag.css';
import '../styles/CustomersOrders.css';

import * as api from '../services/api';

function CustomersOrders() {
  // const { userInfo, allUsersOrders, setUsersOrders } = useContext(context);
  const { userInfo, setAllOrders, allOrders } = useContext(ProductsContext);

  useEffect(() => {
    async function getAllOrders() {
      const orders = await api.getOrders(userInfo.token);
      setAllOrders(orders);
    }
    getAllOrders();
  }, []);

  return (
    <div className="customer-orders-page">
      <NavBarCustomer textProp="pedidos" />
      <div className="orders-list">
        { allOrders.map((order) => (
          <OrderCard
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </div>
  );
}

export default CustomersOrders;

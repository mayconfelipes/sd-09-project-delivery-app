import React, { useContext, useEffect } from 'react';
import SellerOrderCard from '../components/SellerOrderCard';
import NavBarSeller from '../components/navBarSeller';
import ProductsContext from '../context/ProductsContext';
import '../styles/SellerOrders.css';

import * as api from '../services/api';

function SellerOrders() {
  const { setUserInfo, setAllOrders, allOrders } = useContext(ProductsContext);

  useEffect(() => {
    async function getAllOrders() {
      const user = JSON.parse(localStorage.getItem('user'));
      setUserInfo(user);
      const orders = await api.getSales(user.token);
      setAllOrders(orders);
    }
    getAllOrders();
  }, []);

  return (
    <div className="seller-orders-page">
      <NavBarSeller />
      <div className="seller-orders-list">
        { allOrders.map((order) => (
          <SellerOrderCard
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </div>
  );
}

export default SellerOrders;

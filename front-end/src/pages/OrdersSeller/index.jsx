import React, { useEffect, useState } from 'react';
import CardOrderList from '../../components/CardOrderList';
import NavBarSeller from '../../components/NavbarSeller';
import api from '../../service/axiosApi';
import './OrdersSeller.css';

const OrdersSeller = () => {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api.get('/orders', { headers: { authorization: token } })
      .then((resp) => setOrders(resp.data));
  }, [token]);

  return (
    <div>
      <NavBarSeller />
      <div className="order-list-container">
        <section className="order-container">
          { orders
            .map((order, index) => <CardOrderList order={ order } key={ index } />) }
        </section>
      </div>
    </div>
  );
};

export default OrdersSeller;

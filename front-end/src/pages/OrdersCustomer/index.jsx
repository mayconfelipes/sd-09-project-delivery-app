import React, { useEffect, useState } from 'react';
import CardOrderListCustomer from '../../components/CardOrderListCustomer';
import NavBar from '../../components/Navbar';
import api from '../../service/axiosApi';
import './OrdersCustomer.css';

const OrdersCustomer = () => {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api.get('/orders', { headers: { authorization: token } })
      .then((resp) => setOrders(resp.data));
  }, [token]);

  return (
    <div>
      <NavBar />
      <div className="order-list-container">
        <section className="order-container">
          { orders
            .map(
              (order, index) => <CardOrderListCustomer order={ order } key={ index } />,
            ) }
        </section>
      </div>
    </div>
  );
};

export default OrdersCustomer;

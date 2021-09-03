import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from '../Components/NavBar';
import SaleCard from '../Components/SaleCard';

function CustomerOrders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const fetchOrders = async () => {
    const user = localStorage.getItem('user');
    const { id } = JSON.parse(user);

    try {
      const salesByUserId = await axios({
        method: 'get',
        url: `http://localhost:3001/sale/byUserId/${id}`,
      });
      return salesByUserId.data.sale;
    } catch (err) {
      setErrorMessage('Não há pedidos.');
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      setOrders(await fetchOrders());
    };
    getOrders();
  }, []);

  return (
    <>
      { console.log('FOI') }
      <NavBar />
      <div className="order-cards">
        <p>{errorMessage}</p>
        { !orders ? ''
          : orders.map((sale, key) => (
            <div
              className="order-card"
              role="button"
              tabIndex="0"
              onKeyPress={ () => history
                .push(`/customer/orders/${sale.id}`) }
              onClick={ () => history.push(`/customer/orders/${sale.id}`) }
              key={ key }
            >
              <SaleCard
                saleId={ sale.id }
                deliveryNumber={ sale.id }
                status={ sale.status }
                saleDate={ sale.saleDate }
                totalPrice={ sale.totalPrice }
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default CustomerOrders;

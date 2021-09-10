import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import NavBar from '../Components/NavBar';
import SellerCard from '../Components/SellerCard';

function SellerOrders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const fetchOrders = async () => {
    try {
      const sales = await axios({
        method: 'get',
        url: 'http://localhost:3001/sale',
      });
      return sales.data;
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
      <NavBar />
      <div className="order-cards">
        { errorMessage ? <p>{ errorMessage }</p> : '' }
        { !orders ? ''
          : orders.map((sale, key) => (
            <div
              className="order-card"
              role="button"
              tabIndex="0"
              onKeyPress={ () => history
                .push(`/seller/orders/${sale.id}`) }
              onClick={ () => history.push(`/seller/orders/${sale.id}`) }
              key={ key }
            >
              <SellerCard
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

export default SellerOrders;

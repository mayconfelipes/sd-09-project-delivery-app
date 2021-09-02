import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';

function CustomerOrders() {
  const history = useHistory();
  const cardClick = () => history.push(`localhost:3000/customer/orders/${orderId}`);

  const [orders, setOrders] = useState();

  const getOrders = async () => {
    // const user = localStorage.getItem('user');
    // const { id } = JSON.parse(user);

    try {
      const salesByUserId = await axios({
        method: 'get',
        url: 'http://localhost:3001/sale/byUserId/1',
      });
      return salesByUserId;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders()
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />

      <div className="order-cards">
        { !orders ? <p>Não há pedidos.</p>
          : orders.forEach((sale) => (
            <div
              className="order-card"
              role="button"
              tabIndex="0"
              onKeyPress={ cardClick }
              onClick={ cardClick }
            >
              <p
                data-testid={ `customer_orders__element-order-id-${sale.orderId}` }
              >
                Pedido
                <span>{ sale.orderNumber }</span>
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${sale.orderId}` }
              >
                { sale.orderStatus }
              </p>
              <p
                data-testid={ `customer_orders__element-order-date-${sale.orderId}` }
              >
                { sale.orderDate }
              </p>
              <p>
                R$
                { sale.orderTotalValue }
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default CustomerOrders;

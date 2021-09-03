import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import AppContext from '../hooks/context';
// import '../App.css';

function Orders() {
  const { sales, getSales } = useContext(AppContext);

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <div className="main">
      <Navbar />
      <main>
        <ul>
          {
            sales.map(({ deliveryNumber, status, saleDate, id }, index) => (
              <li
                key={ index }
                className="main--sales"
              >
                <h4
                  data-testid={ `customer_orders__element-order-id-${id}` }
                >
                  Pedido
                  { deliveryNumber }
                </h4>
                <h4
                  data-testid={ `customer_orders__element-delivery-status-${id}` }
                >
                  { status }
                </h4>
                <h4
                  data-testid={ `customer_orders__element-order-date-${id}` }
                >
                  { saleDate }
                </h4>
              </li>))
          }
        </ul>
      </main>
    </div>
  );
}

export default Orders;

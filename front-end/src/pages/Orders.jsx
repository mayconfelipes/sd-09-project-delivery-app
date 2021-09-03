import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import SalesCard from '../components/SalesCard';
import AppContext from '../hooks/context';
// import '../App.css';

function Orders() {
  const { sales, getSaleById, user } = useContext(AppContext);
  useEffect(() => {
    getSaleById();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <main>
        <ul>
          {
            sales.map(({
              deliveryNumber,
              deliveryAddress,
              status,
              saleDate,
              id,
              totalPrice },
            index) => (
              <SalesCard
                role={ user.role }
                key={ id }
                sale={ {
                  deliveryNumber,
                  deliveryAddress,
                  status,
                  saleDate,
                  id,
                  totalPrice,
                  index } }
              />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default Orders;

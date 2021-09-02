import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import ProductsContext from '../context/ProductsContext';
import '../styles/ordersTag.css';

// import * as api from '../services/api';

function CustomersOrders() {
  // const { userInfo, allUsersOrders, setUsersOrders } = useContext(context);
  const { allOrders } = useContext(ProductsContext);

  // useEffect(() => {
  //   async function getOrders() {
  //     const retrievedOrders = await api.getOrders();
  //     setAllOrders(retrievedOrders);
  //   }

  //   getOrders();
  // });

  return (
    <table>
      <tr>
        <th>Pedido</th>
        <th>Data</th>
        <th>Status</th>
        <th>Valor</th>
      </tr>
      <tbody>
        {
          allOrders.map((order) => (
            <OrderCard
              key={ order.id }
              order={ order }
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default CustomersOrders;

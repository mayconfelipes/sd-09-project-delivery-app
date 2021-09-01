import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import axios from 'axios';

function CustomerOrders() {
  const orderId = 1;
  const history = useHistory();
  const cardClick = () => history.push(`localhost:3000/customer/orders/${orderId}`);

  // const [ orders, setOrders] = useState();

  // useEffect(() => {
  //   const userOrders = axios({
  //     method: 'get',
  //     url: 'http://localhost:3001/user/orders',
  //     data: { userId },
  //   });
  //   setOrders(userOrders);
  // });

  const orderNumber = '001';
  const orderStatus = 'Pendente';
  const orderDate = '01/01/2021';
  const orderTotalValue = '25.58';

  return (
    <>
      <NavBar />
      <div role="button" tabIndex="0" onKeyPress={ cardClick } onClick={ cardClick }>
        <p data-testid={ `customer_orders__element-order-id-${orderId}` }>
          Pedido
          <span>{ orderNumber }</span>
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${orderId}` }>
          { orderStatus }
        </p>
        <p data-testid={ `customer_orders__element-order-date-${orderId}` }>
          { orderDate }
        </p>
        <p>
          R$
          { orderTotalValue }
        </p>
      </div>
    </>
  );
}

export default CustomerOrders;

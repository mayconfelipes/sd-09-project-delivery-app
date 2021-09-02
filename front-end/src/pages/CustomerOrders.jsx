import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

function CustomerOrders() {
  const orderId = 1;
  const history = useHistory();
  const cardClick = () => history.push(`localhost:3000/customer/orders/${orderId}`);

  const [orders, setOrders] = useState();

  useEffect(() => {
    const { id: userId } = localStorage.getItem(user);
    const sales = axios({
      method: 'get',
      url: 'http://localhost:3001/sale/byUserId',
      data: { userId },
    });
    console.log(sales);
    setOrders(sales);
  }, []);

  // const orderNumber = '001';
  // const orderStatus = 'Pendente';
  // const orderDate = '01/01/2021';
  // const orderTotalValue = '25.58';

  return (
    <>
      <NavBar />

      <div className="order-cards">
        {orders.forEach((sale) => (
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

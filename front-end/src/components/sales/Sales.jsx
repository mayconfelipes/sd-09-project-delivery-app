import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import salesAPI from '../../services/salesAPI';
import formatDate from '../../services/formatDate';

const renderSales = (MockSalesDB, click, user) => (
  MockSalesDB.map((sale) => (
    <button
      id={ sale.id }
      type="button"
      key={ sale.id }
      className="card-sale"
      onClick={ click(sale.id) }
    >
      <p data-testid={ `${user}_orders__element-order-${sale.id}` }>
        {`Pedido: ${sale.id}`}
      </p>
      <div
        className="status-sale"
        data-testid={ `${user}_orders__element-delivery-status-${sale.id}` }
      >
        {sale.status}
      </div>

      <div
        className="date-sale"
        data-testid={ `${user}_orders__element-order-date-${sale.id}` }
      >
        {formatDate(sale.saleDate)}
      </div>
      <div
        className="total-price"
        data-testid={ `seller_orders__element-card-price-${sale.id}` }
      >
        R$
        {sale.totalPrice}
      </div>

      <div
        className="address-sale"
        data-testid={ `seller_orders__element-card-address-${sale.id}` }
      >
        {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
      </div>
    </button>
  ))
);

export default function Sales() {
  const history = useHistory();
  const location = useLocation();

  const user = location.pathname.includes('seller') ? 'seller' : 'customer';
  console.log(user);

  const [MockSalesDB, setMockSalesDB] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const userInfos = JSON.parse(localStorage.getItem('user'));

    if (user === 'seller') {
      salesAPI({ sellerId: userInfos.id }, user)
        .then((response) => {
          setMockSalesDB(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setMockSalesDB([]);
          setIsLoading(false);
          console.log(error);
        });
    } else {
      salesAPI({ userId: userInfos.id }, user)
        .then((response) => {
          setMockSalesDB(response);
          setIsLoading(false);
        }).catch((error) => {
          console.log(error);
          setMockSalesDB([]);
          setIsLoading(false);
        });
    }
  }, [user]);

  const handleClick = (id) => () => history.push(`/${user}/orders/${id}`);

  return isLoading ? <p>Loading...</p> : renderSales(MockSalesDB, handleClick, user);
}

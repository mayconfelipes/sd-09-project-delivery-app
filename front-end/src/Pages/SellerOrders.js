import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/newComponents/NabBarAdmin';
import { getCostumerOrders } from '../services/api';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [name, setName] = useState('');
  const linksNavbar = [{
    text: 'pedido',
    url: 'https://localhost:3000',
  }];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
    const getAllSales = async () => {
      let request = await getCostumerOrders(user.token);
      request = request.filter(({ seller }) => seller.name === user.name);
      setSales(request);
    };
    getAllSales();
  }, []);

  const salesRender = () => (
    sales.map((element) => (
      <Link to={ `/seller/orders/${element.id}` } key={ element.id }>
        <div>
          <span data-testid={ `seller_orders__element-order-id-${element.id}` }>
            {element.id}
          </span>
          <span data-testid={ `seller_orders__element-delivery-status-${element.id}` }>
            {element.status}
          </span>
          <span data-testid={ `seller_orders__element-order-date-${element.id}` }>
            {element.saleDate}
          </span>
          <span data-testid={ `seller_orders__element-card-price-${element.id}` }>
            {element.totalPrice}
          </span>
          <span data-testid={ `seller_orders__element-card-address-${element.id}` }>
            {`${element.deliveryAddress} ${element.deliveryNumber}`}
          </span>
        </div>
      </Link>
    ))
  );

  return (
    <>
      {console.log(sales)}
      <NavBar
        links={ linksNavbar }
        user={ name }
      />
      <div className="all-cards">
        {salesRender()}
      </div>
    </>
  );
}

export default SellerOrders;

import React, { useEffect, useState } from 'react';
// import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/Organisms/NabBar';
import { getSales } from '../services/api';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [name, setName] = useState('');
  const linksNavbar = [{
    text: 'pedido',
    url: 'https://localhost:3000',
  }];

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setName(userInfo.name);
    const getAllSales = async () => {
      let request = await getSales(userInfo.token);
      request = request.filter(({ seller }) => seller.name === userInfo.name);
      setSales(request);
    };
    getAllSales();
  }, []);

  const salesRender = () => (
    sales.map((element) => (
      <div key={ element.id }>
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

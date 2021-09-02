import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/Organisms/NabBar';
import { getSales } from '../services/api';
import { formatDate, formatPrice } from '../services/functions';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [name, setName] = useState('');
  const linksNavbar = [
    // {
    //   text: 'Produtos',
    //   url: 'https://localhost:3000',
    //   testId: 'customer_products__element-navbar-link-products',
    // },
    {
      text: 'pedido',
      url: 'https://localhost:3000',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];

  const allDataIds = (key, index) => {
    const dataIds = {
      orderId: `seller_orders__element-order-id-${index}`,
      status: `seller_orders__element-delivery-status-${index}`,
      date: `seller_orders__element-order-date-${index}`,
      price: `seller_orders__element-card-price-${index}`,
      address: `seller_orders__element-card-address-${index}`,
    };

    return dataIds[key];
  };

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
      <Link to={ `orders/${element.id}` } key={ element.id }>
        <div>
          <span data-testid={ allDataIds('orderId', element.id) }>
            {`Pedido ${element.id}`}
          </span>
          <span data-testid={ allDataIds('status', element.id) }>
            {element.status}
          </span>
          <span data-testid={ allDataIds('date', element.id) }>
            {formatDate(element.saleDate)}
          </span>
          <span data-testid={ allDataIds('price', element.id) }>
            {formatPrice(element.totalPrice)}
          </span>
          <span data-testid={ allDataIds('address', element.id) }>
            {`${element.deliveryAddress} ${element.deliveryNumber}`}
          </span>
        </div>
      </Link>
    ))
  );

  return (
    <>
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

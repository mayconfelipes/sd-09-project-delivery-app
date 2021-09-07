import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TableProducts from '../Components/TableProducts';
import NavBar from '../Components/NavBar';

function Checkout() {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const url = 'http://localhost:3001/sale';

  const fetchSales = async ({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    cart,
  }) => {
    await axios.post(url, {
      userId,
      sellerId,
      deliveryAddress,
      deliveryNumber,
      cart,
    }, {
      headers: {
        Authorization: user.token,
      },
    }).then((res) => {
      history.push(`/customer/orders/${res.data.sale.id}`);
    });
  };

  return (
    <div className="checkout-container">
      <NavBar />
      <h2>Finalizar pedido</h2>
      <TableProducts fetchSales={ fetchSales } />
    </div>
  );
}

export default Checkout;

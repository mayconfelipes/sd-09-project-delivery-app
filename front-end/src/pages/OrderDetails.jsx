import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import Navbar from '../components/Navbar';
import OrderProducts from '../components/OrderProducts';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const milisseconds = 400;
    const userLocal = JSON.parse(localStorage.getItem('user'));
    setUser(userLocal);
    const getSale = async () => {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:3001/sales/${id}`);
        setOrder(response.data);
      }, milisseconds);
    };

    getSale();
  }, [id]);

  const generateDataTestId = (flag) => (
    `${user.role}_order_details__element-order-details-label-${flag}`);

  const maxLengthPad = 4;

  if (!order || !user) return <p>loading...</p>;

  return (
    <section>
      <Navbar />
      <h1>Detalhes do pedido</h1>
      <header>
        <h1
          data-testid={ generateDataTestId('order-id') }
        >
          { order.sale.id.toString().padStart(maxLengthPad, '0') }
        </h1>
        <p
          data-testid={ generateDataTestId('seller-name') }
        >
          P. Vend:
          { order.seller.name }
        </p>
        <p data-testid={ generateDataTestId('order-date') }>
          { format(new Date(order.sale.saleDate), 'dd/MM/yyyy') }
        </p>
        <p data-testid={ generateDataTestId('delivery-status') }>{ order.sale.status }</p>
        <button
          type="button"
          data-testid={ `${user.role}_order_details__button-delivery-check` }
          disabled="true"
        >
          Marcar como entregue
        </button>
      </header>
      { order.sale.products
      && order.sale.products.map(({ name, quantity, price }, index) => (
        <OrderProducts
          key={ name }
          data={ { name, index, quantity, price, role: user.role } }
        />
      )) }
      <p data-testid={ `${user.role}_order_details__element-order-total-price` }>
        { order.sale.totalPrice.replace(/\./ig, ',') }
      </p>
    </section>
  );
}

export default OrderDetails;

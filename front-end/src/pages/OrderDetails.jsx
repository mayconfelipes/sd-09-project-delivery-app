import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import OrderProducts from '../components/OrderProducts';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const milisseconds = 400;
    const getSale = async () => {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:3001/sales/${id}`);
        setOrder(response.data);
      }, milisseconds);
    };

    getSale();
  }, [id]);

  const generateDataTestId = (flag) => (
    `customer_order_details__element-order-details-label-${flag}`);

  const maxLengthPad = 4;

  if (!order) return <p>loading...</p>;

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
        <p data-testid={ generateDataTestId('order-date') }>07/04/2021</p>
        <p data-testid={ generateDataTestId('delivery-status') }>ENTREGUE</p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </header>
      { order.products && order.products.map(({ name, quantity, price }, index) => (
        <OrderProducts
          key={ name }
          data={ { name, index, quantity, price } }
        />
      )) }
      <p data-testid="customer_order_details__element-order-total-price">Total</p>
    </section>
  );
}

export default OrderDetails;

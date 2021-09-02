import React, { useEffect, useState } from 'react';

import OrderLIst from '../../components/checkout/OrderLIst';
import AddressDetails from '../../components/checkout/AddressDetails';
import Header from '../../components/Header';
import api from '../../service/axiosApi';
import './style.css';

const Checkout = () => {
  const [sellers, setSellers] = useState([]);

  const getSellers = async () => {
    const fetchSellers = await api.get('/seller')
      .then((response) => response.data);

    // console.log(fetchSellers);

    const sellersNames = fetchSellers.map(({ name }) => name);
    setSellers(sellersNames);
    console.log('sellersNames > ', sellersNames);
  };

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <div className="checkout-container">
      <header>
        <Header />
      </header>
      <div className="checkout-main-container">
        <h2>Finalizar pedidos</h2>
        <OrderLIst />
        <h2>Detalhes e Endereço para Entrega</h2>
        <AddressDetails names={ sellers } />
      </div>
      <button
        type="button"
        className="finalize-order"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
};

export default Checkout;

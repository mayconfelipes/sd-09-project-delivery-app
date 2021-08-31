import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/CustomerOrderDetails.css';
import dataTestIds from '../utils/dataTestIds';
import api from '../services/api';
import ProductsTable from '../components/ProductsTable';

function CustomerOrderDetails() {
  // Ver como fazer um 'custom react Hook para reutilizar'
  const history = useHistory();
  const { location: { pathname } } = history;
  const orderId = pathname.split('/')[3];

  const [myOrder, setMyOrder] = useState([]);
  const [myItems, setMyItems] = useState([]);

  const getSale = async (id) => {
    const result = await api.getSaleById(id);
    setMyOrder(result);
    return result;
  };

  const getSaleItems = async (id) => {
    const result = await api.getSaleItems(id);
    setMyItems(result.products);
  };

  useEffect(() => {
    getSale(orderId);
    getSaleItems(orderId);
  }, [orderId]);

  const customerDataTestIds = [
    dataTestIds[41],
    dataTestIds[42],
    dataTestIds[43],
    dataTestIds[44],
    dataTestIds[45],
  ];

  return (
    <div>
      <div>
        <p>Aqui é a NavBar</p>
      </div>

      <p>Detalhe do Pedido</p>
      <div>
        <p data-testid={ dataTestIds[37] }>
          { myOrder.id }
        </p>
        <p data-testid={ dataTestIds[38] }>
          { myOrder['seller.name'] }
        </p>
        <p data-testid={ dataTestIds[39] }>
          { myOrder.sale_date }
        </p>
        <p data-testid={ dataTestIds[40] }>
          { myOrder.status }
        </p>
        {/* Esse botão vai ter que ser utilizado na hora de fazer o socket */}
        <p>Botão que vai marcar como entregue</p>
      </div>
      <ProductsTable listItems={ myItems } testIds={ customerDataTestIds } />
      <div>
        <p>{ `R$${myOrder.total_price}` }</p>
      </div>
    </div>
  );
}

export default CustomerOrderDetails;

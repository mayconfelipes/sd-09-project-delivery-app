import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/CustomerOrderDetails.css';
import dataTestIds from '../utils/dataTestIds';
import api from '../services/api';
import ProductsTable from '../components/ProductsTable';

function SellerOrderDetails() {
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

  const sellerDataTestIds = [
    dataTestIds[59],
    dataTestIds[60],
    dataTestIds[61],
    dataTestIds[62],
    dataTestIds[63],
  ];

  return (
    <div>
      <div>
        <p>Aqui é a NavBar</p>
      </div>
      <p>Detalhe do Pedido</p>
      <div>
        <p>{ myOrder.id }</p>
        <p data-testid={ dataTestIds[56] }>{ myOrder.sale_date }</p>
        <p data-testid={ dataTestIds[55] }>{ myOrder.status }</p>
        <p data-testid={ dataTestIds[57] }>PREPARAR PEDIDO</p>
        <p data-testid={ dataTestIds[58] }>SAIU PARA ENTREGA</p>
      </div>
      <ProductsTable listItems={ myItems } testIds={ sellerDataTestIds } />
      <div>
        <p>{ `R$${myOrder.total_price}` }</p>
      </div>
    </div>
  );
}

export default SellerOrderDetails;

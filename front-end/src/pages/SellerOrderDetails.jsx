import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/CustomerOrderDetails.css';
import io from 'socket.io-client';
import dataTestIds from '../utils/dataTestIds';
import api from '../services/api';
import Navbar from '../components/Navbar';
import ProductsTable from '../components/ProductsTable';
import transformDate from '../utils/transformDate';
import transformOrderNumber from '../utils/transformOrderNumber';

const socket = io.connect('http://localhost:3002/');

function SellerOrderDetails() {
  // Ver como fazer um 'custom react Hook para reutilizar'
  const history = useHistory();
  const { location: { pathname } } = history;
  const orderId = pathname.split('/')[3];

  const [myOrder, setMyOrder] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem('user'));

  const getSale = async (id) => {
    const result = await api.getSaleById(id);
    const newDate = transformDate(result.saleDate);
    const newPrice = result.totalPrice.replace('.', ',');
    setMyOrder({ ...result, saleDate: newDate, totalPrice: newPrice });
    setLoading(false);
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

  const clickChangeSaleStatus = async (event) => {
    const status = event.target.value;
    await api.changeOrderStatus(myOrder.id, status);
    getSale(orderId);
    socket.emit('updateFromSeller');
  };

  socket.on('updateSeller', () => {
    getSale(orderId);
  });

  if (loading) {
    return (
      <p> Carregando ...</p>
    );
  }
  return (
    <div>
      <Navbar role={ userData.role } />
      <p>Detalhe do Pedido</p>
      <div>
        <p data-testid={ dataTestIds[54] }>{ transformOrderNumber(myOrder.id) }</p>
        <p data-testid={ dataTestIds[56] }>{ myOrder.saleDate }</p>
        <p data-testid={ dataTestIds[55] }>{ myOrder.status }</p>
        <button
          type="button"
          data-testid={ dataTestIds[57] }
          value="Preparando"
          disabled={ myOrder.status !== 'Pendente' }
          onClick={ clickChangeSaleStatus }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid={ dataTestIds[58] }
          value="Em Trânsito"
          disabled={ myOrder.status !== 'Preparando' }
          onClick={ clickChangeSaleStatus }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <ProductsTable listItems={ myItems } testIds={ sellerDataTestIds } />
      <div>
        <p>
          R$
          <span
            data-testid={ dataTestIds[64] }
          >
            { `${myOrder.totalPrice}` }
          </span>
        </p>
      </div>
    </div>
  );
}

export default SellerOrderDetails;

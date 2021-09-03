import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import OrderHeader from '../components/OrderHeader';
import useOrderDetail from '../hooks/useOrderDetail';
import Seller from '../context/sellerContext';

const OrderDetail = () => {
  const { setShoppingCart } = useContext(Seller);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const History = useHistory();
  const path = History.location.pathname.split('/');
  const id = path[path.length - 1];
  const [setOrderDetail] = useOrderDetail();

  useEffect(() => {
    setOrderDetail(token, setShoppingCart, id);
  }, []);

  return (
    <>
      <Header />
      <h1>Detalhe do Pedido</h1>
      <OrderHeader id={ id } />
      <CheckoutTable />
    </>
  );
};

export default OrderDetail;

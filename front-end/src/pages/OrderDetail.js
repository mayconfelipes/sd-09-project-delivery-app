import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import OrderHeader from '../components/OrderHeader';
import useOrderDetail from '../hooks/useOrderDetail';
import Seller from '../context/sellerContext';
import Customer from '../context/customerContext';

const OrderDetail = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const History = useHistory();
  const path = History.location.pathname.split('/');
  const id = path[path.length - 1];
  const role = path[1];
  const { setShoppingCart } = useContext(role === 'seller' ? Seller : Customer);
  const [setOrderDetail] = useOrderDetail();

  useEffect(() => {
    setOrderDetail(token, setShoppingCart, id);
  }, [id, setOrderDetail, setShoppingCart, token]);

  return (
    <>
      <Header />
      <OrderHeader id={ id } />
      <CheckoutTable />
    </>
  );
};

export default OrderDetail;

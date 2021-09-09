import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductsContext from './ProductsContext';

const socket = io('http://localhost:3001');

const ProductsProvider = ({ children }) => {
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentOrderTotal, setCurrentOrderTotal] = useState(0);
  const [orderAddress, setOrderAddress] = useState('');
  const [orderAddressNumber, setOrderAddressNumber] = useState('');
  const [allOrders, setAllOrders] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [allSellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');

  function removeItemFromCart(itemIndex) {
    const newCart = currentOrder.filter((item, index) => index !== itemIndex);
    const newOrderTotal = newCart
      .reduce((acc, cur) => acc + (cur.quantity * cur.price), 0).toFixed(2);
    setCurrentOrderTotal(newOrderTotal);
    return setCurrentOrder(newCart);
  }

  async function submitOrder() {
    const productsList = currentOrder.map((item) => {
      const reformedItem = item;
      reformedItem.productId = item.id;
      delete reformedItem.id;
      delete reformedItem.name;
      delete reformedItem.price;
      return reformedItem;
    });
    const orderObject = {
      sellerId: Number(selectedSeller),
      totalPrice: currentOrderTotal,
      deliveryAddress: orderAddress,
      deliveryNumber: orderAddressNumber,
      saleDate: new Date(),
      status: 'Pendente',
      products: productsList,
    };
    const newOrder = await api.postNewOrder(orderObject, userInfo.token);
    setCurrentOrder([]);
    setCurrentOrderTotal(0);
    socket.emit('createNewOrder', newOrder);
    return history.push(`/customer/orders/${newOrder.id}`);
  }
  const [order, setOrder] = useState([]);

  const getProducts = async () => {
    try {
      const allProducts = await api.getProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const getFromDB = await fetch('http://localhost:3001/users');
      const respDB = await getFromDB.json();
      setUsers(respDB);
      return respDB;
    } catch (err) {
      console.log(err);
    }
  };

  const getSellers = async () => {
    try {
      const sellers = await api.getSellers();
      setSellers(sellers);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrders = async () => {
    try {
      const orders = await api.getOrders(userInfo.token);
      setAllOrders(orders);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    users,
    products,
    currentOrder,
    currentOrderTotal,
    orderAddress,
    orderAddressNumber,
    userInfo,
    allOrders,
    allSellers,
    selectedSeller,
    order,
    setUsers,
    setProducts,
    setCurrentOrder,
    setCurrentOrderTotal,
    setOrderAddress,
    setOrderAddressNumber,
    setUserInfo,
    setAllOrders,
    setSellers,
    setSelectedSeller,
    setOrder,
    getProducts,
    getUsers,
    getSellers,
    removeItemFromCart,
    submitOrder,
    getOrders,
  };

  return (
    <ProductsContext.Provider value={ context }>
      { children }
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;

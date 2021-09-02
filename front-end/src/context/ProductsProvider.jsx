import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

// const testOrder = [
//   {
//     id: 1,
//     name: 'Skol lata 250ml',
//     price: 2.20,
//     quantity: 2,
//   },
//   {
//     id: 2,
//     name: 'Heineken 600ml',
//     price: 7.50,
//     quantity: 3,
//   },
// ];
const sellers = [
  {
    name: 'Luciano',
    id: 1,
  },
  {
    name: 'Natália',
    id: 2,
  },
];
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
  const [allSellers, setSellers] = useState(sellers);
  const [selectedSeller, setSelectedSeller] = useState('');
  function removeItemFromCart(itemIndex) {
    const newCart = currentOrder.filter((item, index) => index !== itemIndex);
    return setCurrentOrder(newCart);
  }

  function submitOrder() {
    const orderObject = {
      userInfo,
      selectedSeller,
      totalPrice: currentOrderTotal,
      deliveryAddress: orderAddress,
      deliveryNumber: orderAddressNumber,
      saleDate: new Date(),
      status: 'Pendente',
      products: currentOrder,
    };
    console.log(orderObject);
    return history.push('/customer/orders/1');
  }
  const [order, setOrder] = useState([]);

  const getProducts = async () => {
    try {
      const getFromDB = await fetch('http://localhost:3001/products');
      const respDB = await getFromDB.json();
      setProducts(respDB);
      return respDB;
    } catch (err) {
      console.log(err);
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

  // const getSellers = async () => {
  //   const getFromDB = await fetch
  // }

  const context = {
    getProducts,
    getUsers,
    setUsers,
    users,
    setProducts,
    products,
    currentOrder,
    currentOrderTotal,
    orderAddress,
    orderAddressNumber,
    userInfo,
    allOrders,
    allSellers,
    selectedSeller,
    setCurrentOrder,
    setOrderAddress,
    setOrderAddressNumber,
    setUserInfo,
    setAllOrders,
    removeItemFromCart,
    setSellers,
    setSelectedSeller,
    setCurrentOrderTotal,
    submitOrder,
    setOrder,
    order,
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

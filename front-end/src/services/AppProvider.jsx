import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

const testOrder = [
  {
    id: 1,
    name: 'Skol lata 250ml',
    price: 2.20,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    quantity: 3,
  },
];
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
function AppProvider({ children }) {
  const [currentOrder, setCurrentOrder] = useState(testOrder);
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
      userId: userInfo.id,
      sellerId: selectedSeller.id,
      totalPrice: currentOrderTotal,
      deliveryAddress: orderAddress,
      deliveryNumber: orderAddressNumber,
      saleDate: new Date(),
      status: 'Pendente',
      products: currentOrder,
    };
    console.log(orderObject);
  }

  const globalContextObj = {
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
  };

  return (
    <main>
      <context.Provider value={ globalContextObj }>
        { children }
      </context.Provider>
    </main>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

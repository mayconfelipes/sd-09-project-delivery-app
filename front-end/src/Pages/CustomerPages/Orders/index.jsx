import React from 'react';
import CustomerOrders from '../../../components/templates/CustomerOrders';
import useResquestItems from '../../../hooks/useResquestItems';

const Orders = () => {
  const requestParams = { endpoint: 'customer/orders', responseKey: 'orders' };
  const orders = useResquestItems(requestParams) || [];
  return <CustomerOrders orders={ orders } />;
};

export default Orders;

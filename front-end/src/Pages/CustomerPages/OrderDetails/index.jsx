import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerOrderDetails from '../../../components/templates/CustomerOrderDetails';
import useResquestItems from '../../../hooks/useResquestItems';

const OrderDetails = () => {
  const { id } = useParams();
  const requestParams = { endpoint: `customer/orders/${id}`, responseKey: 'order' };
  const order = useResquestItems(requestParams) || {};
  console.log(order);
  return <CustomerOrderDetails order={ order } />;
};

export default OrderDetails;

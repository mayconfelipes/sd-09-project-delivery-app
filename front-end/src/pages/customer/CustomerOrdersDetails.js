import React from 'react';
import { useParams } from 'react-router';
import CheckoutTable from '../../components/CheckoutTable';
// import Header from '../../components/Header';
import TableOrderDetails from '../../components/TableOrderDetails';

const CustomerOrdersDetails = () => {
  const { id } = useParams;

  return (
    <div>
      <TableOrderDetails props={ id } />
      <CheckoutTable />
    </div>
  );
};

export default CustomerOrdersDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutTable from '../../components/CheckoutTable';
import Header from '../../components/Header';
import TableOrderDetails from '../../components/TableOrderDetails';

const CustomerOrdersDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <TableOrderDetails id={ id } />
      <CheckoutTable />
    </div>
  );
};

export default CustomerOrdersDetails;

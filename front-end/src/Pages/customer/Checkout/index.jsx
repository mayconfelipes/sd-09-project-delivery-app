import React from 'react';
import CustomerCheckout from '../../../components/templates/CustomerCheckout';
import useProductsList from '../../../hooks/useProductsList';

const Checkout = () => {
  const products = useProductsList() || [];
  return <CustomerCheckout products={ products } />;
};

export default Checkout;

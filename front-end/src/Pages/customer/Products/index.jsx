import React from 'react';
import CustomerProducts from '../../../Components/templates/CustomerProducts';
import useProductsList from '../../../hooks/useProductsList';

const Products = () => {
  const products = useProductsList() || [];
  return <CustomerProducts products={ products } />;
};

export default Products;

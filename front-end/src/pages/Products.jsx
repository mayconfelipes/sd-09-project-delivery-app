import React from 'react';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';

const Products = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Navbar role={ userData.role } />
      <CardList />
    </div>
  );
};

export default Products;

import React from 'react';
import { Redirect } from 'react-router';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';

const Products = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Navbar role={ userData.role } />
      <CardList />
    </div>
  );
};

export default Products;

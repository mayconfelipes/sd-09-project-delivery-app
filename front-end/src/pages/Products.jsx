import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Products = () => (
  <div>
    <Navbar />
    <div className="list-products">
      <Card id="1" />
      <Card id="2" />
      <Card id="3" />
      <Card id="4" />
      <Card id="5" />
      <Card id="6" />
    </div>

  </div>
);

export default Products;

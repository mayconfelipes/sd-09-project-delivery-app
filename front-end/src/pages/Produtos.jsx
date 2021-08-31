import axios from 'axios';
import React from 'react';
import Header from '../components/Header';

const Produtos = async () => {
  const PRODUCTS_ENDPOINT = 'localhost:3001/api/customer/products';
  const products = await axios.get(PRODUCTS_ENDPOINT);

  // Recebe a lista de produtos no formato:
  /* {"products":[
    {"id":1,"name":"Skol Lata 250ml","price":"2.20","urlImage":"http://localhost:3001/images/skol_lata_350ml.jpg"},
    {"id":2,"name":"Heineken 600ml","price":"7.50","urlImage":"http://localhost:3001/images/heineken_600ml.jpg"},
    {"id":3,"name":"Antarctica Pilsen 300ml","price":"2.49","urlImage":"http://localhost:3001/images/antarctica_pilsen_300ml.jpg"}, ...]} */

  console.log(products);

  return (
    <section>
      <Header />
    </section>
  );
};

export default Produtos;

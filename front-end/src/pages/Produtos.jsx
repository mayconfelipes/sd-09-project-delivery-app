import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import Header from '../components/Header';

const Produtos = () => {
  const [products, setProducts] = useState([]);
  useEffect(
    () => {
      const PRODUCTS_ENDPOINT = 'http://localhost:3001/api/customer/products';
      const fetchData = async () => {
        await axios.get(PRODUCTS_ENDPOINT).then((d) => {
          console.log(d);
          setProducts(d.data);
        });
      };
      fetchData();
    }, [],

  );

  return (
    <>
      <Header />
      {
        products.map(
          (Produto) => <CardProduct product={ Produto } key={ Produto.id } />,
        )
      }
    </>
  );
};

export default Produtos;

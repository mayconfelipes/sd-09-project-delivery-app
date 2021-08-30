import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduct';
import Loading from '../../components/Loading';
// import CartButton from '../../components/CartButton';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const drinks = await response.json();
      console.log(drinks);
      setProducts(drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div>
      <NavBar />
      {products ? products
        .map((product) => <CardProduct key={ product.id } product={ product } />)
        : <Loading /> }
      {/* <CartButton /> */}
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduct';
import Loading from '../../components/Loading';
import CartButton from '../../components/CartButton';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = fetch('http://localhost:3001/products');
      const drinks = await response.json();
      setProducts(drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  if (!products || products.length === 0) return <Loading />;

  return (
    <div>
      <NavBar />
      {products
        .map((product) => <CardProduct key={ product.id } product={ product } />)}
      <CartButton />
    </div>
  );
};

export default Products;

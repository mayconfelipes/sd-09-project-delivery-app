import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProducts/CardProduct';
import Loading from '../../components/Loading';
import CartButton from '../../components/CartButton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [changed, setChanged] = useState(0);

  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const drinks = await response.json();
      setProducts(drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  useEffect(() => {
    const cartItens = JSON.parse(localStorage.getItem('products'));
    const currPrice = Object.entries(cartItens)
      .reduce((acc, curr) => acc + curr[1].totalProduct, 0).toFixed(2);
    setTotalPrice(currPrice);
  }, [changed]);

  return (
    <div>
      <NavBar />
      {products ? products
        .map((product) => (<CardProduct
          key={ product.id }
          product={ product }
          setChanged={ setChanged }
        />))
        : <Loading /> }
      <CartButton totalPrice={ totalPrice } />
    </div>
  );
};

export default Products;

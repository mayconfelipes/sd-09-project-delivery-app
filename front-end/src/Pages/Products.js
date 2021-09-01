import React, { useEffect, useState } from 'react';
import NavBar from '../Components/newComponents/NabBar';
import ProductCard from '../Components/newComponents/productCard';
import { getProducts } from '../services/api';
import CartButton from '../Components/newComponents/CartButton';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      const productsList = await getProducts(userInfo.token);
      setProducts(productsList);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <NavBar />
      {products.length > 0 && products
        .map((prod) => <ProductCard product={ prod } key={ prod.id } />)}
      <CartButton />
    </>
  );
}

export default Products;

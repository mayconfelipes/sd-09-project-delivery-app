import React, { useEffect } from 'react';
import Header from '../components/Header';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

require('dotenv').config();

const ClientProducts = () => {
  const token = process.env.REACT_APP_TOKEN;
  const [products, setProducts] = useProducts();

  let renderProducts;
  if (products.length > 0) {
    renderProducts = products.map(
      (prod) => <ProductCard key={ prod.id } product={ prod } />,
    );
  }

  useEffect(() => {
    const loadProducts = async () => {
      await setProducts(token);
    };
    loadProducts();
  }, [token, setProducts]);

  return (
    <div className="main">
      <Header />
      { renderProducts }
    </div>
  );
};

export default ClientProducts;

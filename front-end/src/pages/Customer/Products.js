import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/Customer/ProductCard';
import { getProducts } from '../../services/api';

const route = 'customer_products';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <Navbar />
      <h1>PRODUTOS</h1>
      <p data-testid={ `${route}__checkout-button-cart` }>checkout bottom value</p>
      { products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      )) }
    </section>
  );
}

export default Products;

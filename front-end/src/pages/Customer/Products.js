import React, { useEffect, useState, useContext } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/Customer/ProductCard';
import { getProducts } from '../../services/api';
import { createButton } from '../../utils/creators';
import { cartButton } from '../../data/ButtonOptions';
import { CustomerContext } from '../../context/CustomerContext';

const route = 'customer_products';

function Products() {
  const [products, setProducts] = useState([]);
  const { total } = useContext(CustomerContext);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <Navbar />
      <h1>PRODUTOS</h1>
      { createButton({
        ...cartButton(total),
        onClick: () => {},
        route,
        disabled: total === '0.00',
      }) }
      { products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      )) }
    </section>
  );
}

export default Products;

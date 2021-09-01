import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import { Context } from '../context';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/Customer/ProductCard';
import { getProducts } from '../../services/api';
// import { createButton } from '../../utils/creators';
// import { cartButton } from '../../data/ButtonOptions';
import { CustomerContext } from '../../context/CustomerContext';

const route = 'customer_products';

function Products() {
  const [products, setProducts] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { total } = useContext(CustomerContext);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  if (shouldRedirect) return <Redirect to="/customer/checkout" />;

  return (
    <section>
      <Navbar />
      <h1>PRODUTOS</h1>
      <button
        data-testid={ `${route}__button-cart` }
        type="button"
        onClick={ () => setShouldRedirect(true) }
        disabled={ total === '0.00' }
      >
        Ver Carrinho R$
        <span data-testid="customer_products__checkout-bottom-value">
          {`${total}`.replace(/\./, ',') }
        </span>
      </button>
      { products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      )) }
    </section>
  );
}

export default Products;

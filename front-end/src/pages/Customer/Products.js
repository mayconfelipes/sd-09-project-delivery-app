import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Navbar, CustomerProductCard } from '../../components';
import { getProducts } from '../../services/api';
import { CustomerContext } from '../../context/CustomerContext';
import { formatPrice } from '../../utils/format';

const route = 'customer_products';

function Products() {
  const [products, setProducts] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { total, cartItems } = useContext(CustomerContext);

  const handleClick = () => {
    setShouldRedirect(true);
    localStorage.cart = JSON.stringify(Object.values(cartItems)
      .filter(({ quantity }) => quantity > 0));
    localStorage.total = JSON.stringify(total);
  };

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
        onClick={ handleClick }
        disabled={ total === '0.00' }
      >
        Ver Carrinho R$
        <span data-testid="customer_products__checkout-bottom-value">
          { formatPrice(total) }
        </span>
      </button>
      { products.map((product) => (
        <CustomerProductCard key={ product.id } product={ product } />
      )) }
    </section>
  );
}

export default Products;

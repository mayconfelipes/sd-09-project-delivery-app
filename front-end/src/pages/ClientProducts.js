import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const ClientProducts = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useProducts();
  const cartTotal = JSON.parse(localStorage.getItem('cart'));
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
  }, [token]);

  return (
    <div className="main">
      <Header />
      { renderProducts }
      <Link
        to="/customer/checkout"
        data-testid="customer_products__button-cart"
      >
        <div>
          <span>Ver Carrinho: R$</span>
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { cartTotal }
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ClientProducts;
